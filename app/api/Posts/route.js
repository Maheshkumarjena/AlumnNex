import { NextResponse } from "next/server";
import Post from "@/models/Post";
import mongoose from "mongoose";
import { uploadToCloudinary } from "@/lib/cloudinary";

// GET all posts
export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get('userId');

        const posts = await Post.find({ userId })
            .sort({ createdAt: -1 })
            .populate({
                path: 'userId',
                select: '-password',
            })
            .populate({
                path: 'comments',
                populate: {
                    path: 'userId',
                    select: 'username profilePicture',
                },
            });

        const transformedPosts = posts.map(post => {
            const { userId, comments, ...rest } = post._doc;
            return {
                ...rest,
                user: userId,
                comments: comments.map(comment => ({
                    ...comment._doc,
                    commentedUser: comment.userId,
                })),
            };
        });

        return NextResponse.json(
            {
                success: true,
                message: "Posts retrieved successfully",
                data: transformedPosts,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error retrieving posts:", error);
        return NextResponse.json(
            { success: false, message: "Failed to retrieve posts", error: error.message },
            { status: 500 }
        );
    }
}

// CREATE new post
export async function POST(request) {
    try {
        const formData = await request.formData();
        const content = formData.get('content');
        const id = formData.get('id');
        const files = formData.getAll('files');

        if (!content || !id) {
            return NextResponse.json(
                { success: false, message: "Content and user ID are required" },
                { status: 400 }
            );
        }

        let mediaUrls = [];
        if (files.length > 0) {
            const uploadPromises = files.map(async file => {
                const bytes = await file.arrayBuffer();
                const buffer = Buffer.from(bytes);
                return uploadToCloudinary(buffer);
            });
            mediaUrls = await Promise.all(uploadPromises);
        }

        const post = new Post({
            userId: new mongoose.Types.ObjectId(id),
            content,
            media: mediaUrls,
        });

        await post.save();

        return NextResponse.json(
            { success: true, message: "Post created successfully", data: post },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating post:", error);
        return NextResponse.json(
            { success: false, message: "Failed to create post", error: error.message },
            { status: 500 }
        );
    }
}