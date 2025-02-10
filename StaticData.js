export const staticUsers = [
    {
      username: 'alice_johnson',
      email: 'alice.johnson@example.com',
      password: 'password123', // Remember to hash passwords in a real application
      dob: new Date('1990-05-15'),
      almaMater: 'Harvard University',
      lastYearOfEducation: new Date('2012-06-01'),
      accountType: 'Alumni',
      profilePicture: 'https://example.com/images/alice.jpg'
    },
    {
      username: 'bob_williams',
      email: 'bob.williams@example.com',
      password: 'password456', // Remember to hash passwords in a real application
      dob: new Date('1985-08-22'),
      almaMater: 'MIT',
      lastYearOfEducation: new Date('2007-05-15'),
      accountType: 'Alumni',
      profilePicture: 'https://example.com/images/bob.jpg'
    },
    {
      username: 'carol_lee',
      email: 'carol.lee@example.com',
      password: 'password789', // Remember to hash passwords in a real application
      dob: new Date('1992-03-18'),
      almaMater: 'Stanford University',
      lastYearOfEducation: new Date('2014-06-15'),
      accountType: 'Alumni',
      profilePicture: 'https://example.com/images/carol.jpg'
    },
    {
      username: 'dave_brown',
      email: 'dave.brown@example.com',
      password: 'password101', // Remember to hash passwords in a real application
      dob: new Date('1988-11-30'),
      almaMater: 'University of Cambridge',
      lastYearOfEducation: new Date('2010-06-01'),
      accountType: 'Alumni',
      profilePicture: 'https://example.com/images/dave.jpg'
    },
    {
      username: 'eve_martinez',
      email: 'eve.martinez@example.com',
      password: 'password202', // Remember to hash passwords in a real application
      dob: new Date('1995-07-10'),
      almaMater: 'University of Oxford',
      lastYearOfEducation: new Date('2017-06-15'),
      accountType: 'Alumni',
      profilePicture: 'https://example.com/images/eve.jpg'
    }
  ];
  

  export const staticPosts = [
    {
      userId: '609b1a2d8a1a2c1a8f0d8a1b', // Example ObjectId
      content: 'Excited to share my new project!',
      media: ['https://example.com/images/project1.jpg'],
      likes: ['609b1a2d8a1a2c1a8f0d8a1c', '609b1a2d8a1a2c1a8f0d8a1d'],
      comments: ['609b1a2d8a1a2c1a8f0d8a1e', '609b1a2d8a1a2c1a8f0d8a1f'],
      shares: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: '609b1a2d8a1a2c1a8f0d8a2a', // Example ObjectId
      content: 'Loving the new features in our product update!',
      media: ['https://example.com/images/product-update.jpg'],
      likes: ['609b1a2d8a1a2c1a8f0d8a2b', '609b1a2d8a1a2c1a8f0d8a2c'],
      comments: ['609b1a2d8a1a2c1a8f0d8a2d', '609b1a2d8a1a2c1a8f0d8a2e'],
      shares: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: '609b1a2d8a1a2c1a8f0d8a3a', // Example ObjectId
      content: 'Great workshop on AI and machine learning!',
      media: ['https://example.com/images/workshop.jpg'],
      likes: ['609b1a2d8a1a2c1a8f0d8a3b', '609b1a2d8a1a2c1a8f0d8a3c'],
      comments: ['609b1a2d8a1a2c1a8f0d8a3d', '609b1a2d8a1a2c1a8f0d8a3e'],
      shares: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  

  export const staticMedia = [
    {
      userId: '609b1a2d8a1a2c1a8f0d8a1b', // Example ObjectId
      url: 'https://example.com/images/media1.jpg',
      createdAt: new Date('2023-01-15T08:30:00Z')
    },
    {
      userId: '609b1a2d8a1a2c1a8f0d8a2a', // Example ObjectId
      url: 'https://example.com/images/media2.jpg',
      createdAt: new Date('2023-02-20T14:45:00Z')
    },
    {
      userId: '609b1a2d8a1a2c1a8f0d8a3a', // Example ObjectId
      url: 'https://example.com/images/media3.jpg',
      createdAt: new Date('2023-03-10T09:15:00Z')
    },
    {
      userId: '609b1a2d8a1a2c1a8f0d8a1c', // Example ObjectId
      url: 'https://example.com/images/media4.jpg',
      createdAt: new Date('2023-04-25T11:50:00Z')
    },
    {
      userId: '609b1a2d8a1a2c1a8f0d8a2b', // Example ObjectId
      url: 'https://example.com/images/media5.jpg',
      createdAt: new Date('2023-05-30T16:20:00Z')
    }
  ];

  
  export const staticFollowing = [
    {
      userId: '609b1a2d8a1a2c1a8f0d8a1b', // Example ObjectId
      followingId: '609b1a2d8a1a2c1a8f0d8a1c', // Example ObjectId
      followedAt: new Date('2023-01-15T08:30:00Z')
    },
    {
      userId: '609b1a2d8a1a2c1a8f0d8a2a', // Example ObjectId
      followingId: '609b1a2d8a1a2c1a8f0d8a2b', // Example ObjectId
      followedAt: new Date('2023-02-20T14:45:00Z')
    },
    {
      userId: '609b1a2d8a1a2c1a8f0d8a3a', // Example ObjectId
      followingId: '609b1a2d8a1a2c1a8f0d8a3b', // Example ObjectId
      followedAt: new Date('2023-03-10T09:15:00Z')
    },
    {
      userId: '609b1a2d8a1a2c1a8f0d8a1c', // Example ObjectId
      followingId: '609b1a2d8a1a2c1a8f0d8a1d', // Example ObjectId
      followedAt: new Date('2023-04-25T11:50:00Z')
    },
    {
      userId: '609b1a2d8a1a2c1a8f0d8a2b', // Example ObjectId
      followingId: '609b1a2d8a1a2c1a8f0d8a2c', // Example ObjectId
      followedAt: new Date('2023-05-30T16:20:00Z')
    }
  ];


  export const staticFollowers = [
    {
      userId: '609b1a2d8a1a2c1a8f0d8a1b', // Example ObjectId
      followerId: '609b1a2d8a1a2c1a8f0d8a1c', // Example ObjectId
      followedAt: new Date('2023-01-15T08:30:00Z')
    },
    {
      userId: '609b1a2d8a1a2c1a8f0d8a2a', // Example ObjectId
      followerId: '609b1a2d8a1a2c1a8f0d8a2b', // Example ObjectId
      followedAt: new Date('2023-02-20T14:45:00Z')
    },
    {
      userId: '609b1a2d8a1a2c1a8f0d8a3a', // Example ObjectId
      followerId: '609b1a2d8a1a2c1a8f0d8a3b', // Example ObjectId
      followedAt: new Date('2023-03-10T09:15:00Z')
    },
    {
      userId: '609b1a2d8a1a2c1a8f0d8a1c', // Example ObjectId
      followerId: '609b1a2d8a1a2c1a8f0d8a1d', // Example ObjectId
      followedAt: new Date('2023-04-25T11:50:00Z')
    },
    {
      userId: '609b1a2d8a1a2c1a8f0d8a2b', // Example ObjectId
      followerId: '609b1a2d8a1a2c1a8f0d8a2c', // Example ObjectId
      followedAt: new Date('2023-05-30T16:20:00Z')
    }
  ];

  export
  