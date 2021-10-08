///// Movies ////////
// Array of objects - questions, options and answers
const quiz = [{
        question: 'Who directed Titanic, Avatar and The Terminator?',
        options: ['Steven Spielberg', 'James Cameron', 'Christopher Nolan'],
        answer: 1
    },
    {
        question: 'Which movie has a Starbucks cup in every single scene in the movie?',
        options: ['La La Land', 'The Duffer Brothers', 'Fight Club'],
        answer: 2
    },
    {
        question: 'Which movie does not feature Emma Stone?',
        options: ['No Strings Attached', 'The Help', 'Superbad'],
        answer: 0
    },
    {
        question: 'Which country was the 2017 movie Call Me By Your Name filmed?',
        options: ['France', 'Greece', 'Italy'],
        answer: 2
    },
    {
        question: 'Which actor has NOT played the Joker?',
        options: ['Jack Nicholson', 'Sean Penn', 'Jared Leto'],
        answer: 1
    },
    {
        question: 'What is the name of the fictional land where Frozen takes place?',
        options: ['Arendelle', 'Florin', 'Grimm'],
        answer: 0
    },
    {
        question: 'Freddy Krueger wears a striped sweater that is which colors?',
        options: ['Orange and green', 'Red and green', 'Orange and brown'],
        answer: 1
    },
    {
        question: 'Where were The Lord of the Rings movies filmed?',
        options: ['Iceland', ' New Zealand', 'Northern Ireland'],
        answer: 1
    },

    {
        question: 'Who actually drew the sketch of Rose in Titanic?',
        options: ['Billy Zane', 'James Cameron', 'Leonardo DiCaprio'],
        answer: 1
    },

    {
        question: 'In The Ring, how long do people have to live after they watch a cursed videotape?',
        options: ['Seven days', 'Three days', 'Ten days'],
        answer: 0
    },

    {
        question: 'What is the Christmas film which had total worldwide gross of $511.8 million ?',
        options: ['Home Alone', 'Elf', 'The Grinch'],
        answer: 2
    },
    {
        question: 'Which Quentin Tarantino movie was the third biggest rated earner of 1994?',
        options: ['Kill Bill: Volume 1', 'Pulp Fiction', 'Reservoir Dogs'],
        answer: 1
    },
    {
        question: "In which movie did Captain America lift Thor's hammer?",
        options: ['Avengers: Endgame', 'Avengers: Age of Ultron', ' Avengers: Infinity War'],
        answer: 0
    },
    {
        question: 'After which movie did the sale of pet rats increase rapidly?',
        options: ['Ratatouille', 'Soul', 'Pets'],
        answer: 0
    },
    {
        question: 'How many "Star Wars" movies are there?',
        options: ['10', '11', '12'],
        answer: 2
    },
    {
        question: "Who voices Joy in Pixar's Inside Out?",
        options: ['Kathryn Hahn', 'Amy Poehler', 'Tina Fey'],
        answer: 1
    },
    {
        question: 'Which country does Forrest Gump travel to as part of the All-American Ping-Pong Team?',
        options: ['China', 'Vietnam', 'Sweden'],
        answer: 0
    },
    {
        question: 'For what movie did Steven Spielberg win his first Oscar for Best Director?',
        options: ['ET', 'Schindler’s List', 'Jaws'],
        answer: 1
    },
    {
        question: 'True or false: Sean Connery wore a toupee in every James Bond movie',
        options: ['True', 'False'],
        answer: 0
    },
    {
        question: 'True or false: Speed is the only movie Sandra Bullock and Keanu Reeves have starred in together',
        options: ['False', 'True'],
        answer: 0
    },
    {
        question: 'In Mean Girls, Cady moves to Illinois from which continent?',
        options: [' Australia', 'Africa', 'Europe'],
        answer: 1
    },
    {
        question: "Michael Myers' mask in Halloween is which actor's face?",
        options: ['Clint Eastwood', 'Paul Newman', 'William Shatner'],
        answer: 2
    },
    {
        question: 'Which movie was not directed by Tim Burton?',
        options: ['The Witches ', "Pee-Wee's Big Adventure", 'Corpse Bride'],
        answer: 0
    },
    {
        question: "What object was Toy Story’s Woody originally?",
        options: ['A ventriloquist dummy', 'A puppet', 'A clown doll'],
        answer: 0
    },
    {
        question: 'Which professional athlete was considered for the lead in The Terminator?',
        options: ['Mike Tyson', 'O.J. Simpson', 'Wayne Gretzky'],
        answer: 1
    },
    {
        question: "True or false: The Shining was Stephen King's first novel to be adapted into a movie",
        options: ['False', 'True'],
        answer: 0
    },
    {
        question: 'What song plays in the tunnel scene in Perks of Being a Wallflower?',
        options: ['"Heroes" by David Bowie', '"Imagine" by John Lennon', '"High and Dry" by Radiohead'],
        answer: 0
    },
    {
        question: 'Which was the first movie to show a toilet flushing?',
        options: ['Vertigo', 'Citizen Kane', ' Psycho'],
        answer: 2
    },
    {
        question: 'True or false: In Django Unchained, Leonardo DiCaprio intentionally cut his hand during a scene',
        options: ['False', 'True'],
        answer: 0
    },
    {
        question: "What karaoke song does Cameron Diaz's character sing in My Best Friend's Wedding?",
        options: ["I Just Don't Know What I'd Do With Myself", 'Could This Be Love', 'I Will Always Love You'],
        answer: 0
    },
    {
        question: 'Which actor plays Private Ryan in Saving Private Ryan?',
        options: ['Tom Hanks', 'Edward Burns', 'Matt Damon'],
        answer: 2
    },
    {
        question: "What is the name of Jeff Goldblum's character in Jurassic Park?",
        options: ['Dr. Ian Malcolm', 'Dr. Malcolm Stevens', 'Dr. Evan Malcolm'],
        answer: 0
    },
    {
        question: 'What is the highest-grossing movie of all time?',
        options: ['Titanic ', 'Avatar', 'Avengers: Endgame '],
        answer: 1
    },
    {
        question: 'Who was originally cast to voice Shrek?',
        options: ['Bill Murray', 'Chris Rock', 'Chris Farley'],
        answer: 2
    },
    {
        question: 'Miley Cyrus and Liam Hemsworth first met on the set of which film?',
        options: ['Hannah Montana: The Movie', 'Safe Haven', 'The Last Song'],
        answer: 2
    },
    {
        question: 'How many "Rocky" movies has Sylvester Stallone directed?',
        options: ['4', '3', '2'],
        answer: 0
    },
    {
        question: 'What was the name of the actress who played Moana in the 2016 Disney film?',
        options: ['Rachel House', 'Nicole Scherzinger', "Auli'i Cravalho"],
        answer: 2
    },
    {
        question: 'What was the first feature-length animated movie ever released?',
        options: ['Sleeping Beauty', 'Snow White and the Seven Dwarfs', 'Little mermaid'],
        answer: 1
    },
    {
        question: "What flavor of Pop Tarts does Buddy the Elf use in his spaghetti in Elf? ",
        options: ['Chocolate', 'Pumpkin', 'Strawberry'],
        answer: 0
    },
    {
        question: 'In The Matrix, does Neo take the blue pill or the red pill?',
        options: ['Blue pill', 'Red pill', 'None'],
        answer: 1
    },
    {
        question: 'Mary Poppins is nanny to which family?',
        options: ['The Bankers family', 'The Smiths family', 'The Banks family'],
        answer: 2
    },
    {
        question: "Which Disney princess's dress changes colour as she dances with her prince at the end of the movie?",
        options: ['Sleeping Beauty', 'Cinderella', 'Beauty and Beast'],
        answer: 0
    },
    {
        question: 'Who plays Gerry in P.S. I Love You?',
        options: ['Russell Crowe', 'Jeffrey Dean Morgan', 'Gerard Butler'],
        answer: 2
    },
    {
        question: 'How many James Bond films did Sean Connery play the 007 agent?',
        options: ['6', '5', '4'],
        answer: 0
    },
    {
        question: 'Who played the lead role in the 2001 film Lara Croft: Tomb Raider?',
        options: ['Alicia Vikander', 'Angelina Jolie', 'Rachel Appleton'],
        answer: 1
    }


]