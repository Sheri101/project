
const EDUCATION = [
    { key:0,
      title:'find determinant',
      time:'30 min',
      Message : 'medium',
      image: require('../../assets/determinant.png'),
      link:'3ROzG6n4yMc',
      para:"A determinant is a real number associated with every square matrix." +
      " I have yet to find a good English definition for what a determinant is." +
      " Everything I can find either defines it in terms of a mathematical formula or suggests some of the uses of it." +
      " There's even a definition of determinant that defines it in terms of itself." +
      " The determinant of a square matrix A is denoted by 'det A' or | A |." +
      " Now, that last one looks like the absolute value of A, but you will have to apply context." +
      " If the vertical lines are around a matrix, it means determinant.",
      vidtitle:"How to Find determinant: the easy way!"
    },
    { key:1,
      title:'integration',
      time:'20 min',
      Message : 'hard',
      image: require('../../assets/integration.png'),
      link:'6WUjbJEeJwM',
      para:"Integration is the inverse process to differentiation. Some people call it anti-differentiation."+
      "Instead of multiplying the power at the front and subtracting one from the power,"+
      "we add one to the power and then divide by the new power.",
      vidtitle:"How to do integration:the easy way!"
    },
    { key:2,
      title:'Multiplication',
      time:'13 min',
      Message : 'easy',
      image: require('../../assets/mult.png'),
      link:'FJ5qLWP3Fqo',
      para:"abc",
      vidtitle:"How to Find determinant:the easy way!"
    },
    { key:3,
        title:'linear algebra',
        time:'13 min',
        Message : 'hard',
        image: require('../../assets/LA.webp'),
        link:'rqZEWmWy1hQ',
        para:"abc",
        vidtitle:"How to Find determinant:the easy way!"
      },
      { key:4,
        title:'Division',
        time:'13 min',
        Message : 'easy',
        image: require('../../assets/div.png'),
        link:'yAJxHO7CLh4',
        para:"abc",
        vidtitle:"How to Find determinant:the easy way!"
      },
  ];

  const HEALTH = [
    { key:0,
      title:'CPR',
      time:'5 min',
      Message : 'easy',
      image: require('../../assets/cpr.jpg'),
      link:'rqZEWmWy1hQ',
      para:"abc",
      vidtitle:"How to Find determinant:the easy way!"
    },
    { key:1,
      title:'First Aid',
      time:'10 min',
      Message : 'hard',
      image: require('../../assets/Aid.webp'),
      link:'rqZEWmWy1hQ',
      para:"abc",
      vidtitle:"How to Find determinant:the easy way!"
    },
    { key:2,
      title:'Meds',
      time:'20 min',
      Message : 'hard',
      image: require('../../assets/hp1.jpg'),
      link:'rqZEWmWy1hQ',
      para:"abc",
      vidtitle:"How to Find determinant:the easy way!"
    },
  ];

  const COOKING = [
    { key:0,
      title:'Baking a cake',
      time:'30 min',
      Message : 'medium',
      image: require('../../assets/cake.jpg'),
      link:'meUTWG4QPF0',
      para:"Making a chocolate cake is a delicious journey blending flour, cocoa powder, butter, sugar, and eggs into a decadent batter. After baking to perfection, the aroma fills the kitchen, enticing everyone nearby. Topped with rich chocolate ganache or creamy frosting, each bite offers a heavenly experience, delighting taste buds with its indulgent sweetness.",
      vidtitle:"How to make the fastest chocolate cake!"
    },
    { key:1,
      title:'Making steak diane',
      time:'20 min',
      Message : 'hard',
      image: require('../../assets/steak.jpg'),
      link:'IuPGQY0nEkI',
      para:"Making steak is a culinary adventure that begins with selecting a quality cut of meat, seasoned to perfection with a blend of salt, pepper, and perhaps a hint of garlic or herbs. The steak is then seared over high heat to create a caramelized crust while locking in its juices. Cooked to your desired level of doneness, whether rare, medium, or well-done, each bite offers a burst of flavor and tenderness that is simply irresistible. Served alongside your favorite sides or atop a bed of greens, a perfectly cooked steak is a timeless classic that satisfies the senses with its savory richness.",
      vidtitle:"Steak Diane Recipe - How to Make a Steak Diane"
    },
    { key:2,
      title:'Ratatoulie',
      time:'13 min',
      Message : 'easy',
      image: require('../../assets/rat.jpg'),
      link:'QOxDxjhyyII',
      para:"Making a chocolate cake is a delicious journey blending flour, cocoa powder, butter, sugar, and eggs into a decadent batter. After baking to perfection, the aroma fills the kitchen, enticing everyone nearby. Topped with rich chocolate ganache or creamy frosting, each bite offers a heavenly experience, delighting taste buds with its indulgent sweetness.",
      vidtitle:"How to Make a perfect Ratatoulie"
    },
    { key:3,
      title:'Biryani',
      time:'13 min',
      Message : 'hard',
      image: require('../../assets/biryani.jpg'),
      link:'wBCwasBVGfo',
      para:"Making biryani is an artful journey through the vibrant tapestry of Indian cuisine,"+
      "where every ingredient harmonizes to create a symphony of flavors. "+
      "Begin by marinating your choice of meat or vegetables in a tantalizing blend of yogurt, ginger-garlic paste,"+
      "and an array of aromatic spices. Let the flavors meld and deepen, infusing the protein with a richness that will"+
      " elevate your biryani to new heights of deliciousness."+
        
      " Next, carefully layer the marinated meat or vegetables with parboiled basmati rice, caramelized onions, and a fragrant bouquet of fresh herbs."+
      " Allow the biryani to simmer gently, letting the spices mingle and the rice soak up the savory essence of the dish. With each forkful, experience the tantalizing medley of flavors "+
      " that dance across your palate, transporting you to the bustling streets of India, where the aroma of biryani fills the air with a sense of culinary delight.",
        vidtitle:"Vegetable curry recipe",
    },
    { key:4,
      title:'vegetabe curry',
      time:'13 min',
      Message : 'easy',
      image: require('../../assets/veg_cur.jpeg'),
      link:'uFa6urPkK4c',
      para:"abc",
      vidtitle:"Restaurant Style Biryani Recipe"
    },
  ];

  const EXERCISES = [
    { key:0,
      title:'dumbell',
      time:'30 min',
      Message : 'hard',
      image: require('../../assets/exer1.png'),
      link:'rqZEWmWy1hQ',
      para:"abc",
      vidtitle:"How to Find determinant:the easy way!"
    },
    { key:1,
      title:'pushup',
      time:'20 min',
      Message : 'medium',
      image: require('../../assets/exer1.png'),
      link:'rqZEWmWy1hQ',
      para:"abc",
      vidtitle:"How to Find determinant:the easy way!"
    },
    { key:2,
      title:'plank',
      time:'13 min',
      Message : 'easy',
      image: require('../../assets/exer1.png'),
      link:'rqZEWmWy1hQ',
      para:"abc",
      vidtitle:"How to Find determinant:the easy way!"
    },
  ];

  export { EDUCATION, COOKING, HEALTH, EXERCISES };