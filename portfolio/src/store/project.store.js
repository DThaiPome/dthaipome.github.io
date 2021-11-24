const projects = [
    {
        title: 'Trail of Crumbs',
        imgSrc: require('@/assets/img/projects/Trail_Of_Crumbs.png'),
        id: 'trail_of_crumbs',
        blurb: '3D Collab Game Project',
        bodyComp: 'a',
        featured: true,
        summary: '<b>Trail of Crumbs</b> is a game produced for the Game Programming class at Northeastern University. It was developed over the span of two months by a team of four programmers, including myself. It is a first-person stealth game, in which the player must use a long-reach grapple hand to pull themself to hard-to-reach areas and navigate to a target point in each level. The player must avoid the many eyes trying to find and apprehend them, like spotlights, robot guards, and an aggressive train conductor. There are several interesting ways for the player to navigate through levels, including reverse-gravity fields and a power-up that lets the player reach farther with their grapple hand. In the end, the player must thwart smuggling efforts and eventually defeat the crime boss known as Crumbs Banks.<br><br>My focus on this project was on the different ways the player interacted with each level. Among other things, I wrote code for the grapple hand, the power-ups, the reverse-gravity fields, and the color-switching lights that are seen later in the game. My primary collaborative challenge was to develop game components that could be used by my teammates, and that would be compatible with the components my teammates developed. I accomplished this by making my components single-purpose and open-ended. As an example, the player\'s grapple hand is not dependent on a specific player object, but instead can be used when paired with any Unity object. Employing this strategy in my development helped reduce the number of conflicts that arose between two different programmers, and helped us produce a game with so many features in such a short amount of time.',
        responsibilities: [
            'Applied 3D game development techniques such as path finding, finite-state machines, and vector and quaternion mathematics.',
            'Integrated 3D character animations using Unity\'s animation system.',
            'Integrated several high-quality art assets into the game.',
            'Organized the design of several game mechanics that all interact with each other.',
            'Followed a strict development timeline over the course of two months, producing prototype, alpha, beta, and gold release versions of the game.'
        ],
        tech: [
            'Unity Engine for game development',
            'Visual Studio for programming in C#',
            'Audacity for recording/editing sound effects and voice lines',
            'Mixamo for character animations',
            'Git for collaboration'
        ],
        bodyImgSrcA: require('@/assets/img/projects/Trail_Of_Crumbs-1.gif'),
        bodyImgSrcB: require('@/assets/img/projects/Trail_Of_Crumbs-2.gif')
    },
    {
        title: 'Antithesis',
        imgSrc: require('@/assets/img/projects/Antithesis.png'),
        id: 'antithesis',
        blurb: 'Large Studio VR Project',
        bodyComp: 'b',
        summary: ['<b>Antithesis</b> is a virtual reality game that features asymmetric multiplayer gameplay, with one player using the VR headset and another player using a PC. The player on the VR headset must navigate a dark, spooky village in search of four ritual components, while the player on the PC watches them from overhead and sends monsters to defeat the player before they can complete their ritual. This project was made on a team of over 20 Northeastern University students and faculty members as part of the Fall 2020 Game Studio course.',
        '<br><br>',
        'I worked on a team of five other student developers, making regular use of Northeastern\'s VR lab for both development and QA testing. I was responsible for implementing some of the game\'s systems:',
        '<ul>',
        '<li>Organizing the health, strength, and speed of the player and all enemy monsters, as well as a system for applying temporary modifications to these attributes.</li>',
        '<li>Interactions between the player and the monsters, such as the player\'s ability to kick away the monsters and each monster\'s ability to damage the player.</li>',
        '<li>A way of recording the speed of the player\'s hands and head, in order to allow them to shake off rats that climb onto them and slow them down.</li>',
        '<li>The non-VR player\'s ability to summon lightning and fire to obstruct the player.</li>',
        '</ul>',
        'The development team and I worked closely with each other and frequently helped each other solve problems, find bugs, and learn more about game programming as a whole. I look forward to being a part of a project of this scale once more!'].join(' '),
        responsibilities: [
            'Collaborated with 5 other Unity developers.',
            'Researched multiple different kinds of virtual reality technology available today.',
            'Rapidly developed a feature-packed game prototype playable in virtual reality over the span of 3 months.',
            'Implemented game mechanics to the specifications of our game design team, and made it as easy as possible for them to experiment with these mechanics themselves.',
            'Designed heavily abstractable code that my fellow developers could easily expand on and rapidly develop new features.',
            'Organized and ran 2 QA tests at different stages of development.',
            'Cross-communicated with several other teams working on other aspects of the game, such as art, sound, and UI/UX.'
        ],
        tech: [
            'Unity Engine for game development',
            'Visual Studio for programming in C#',
            'Discord used for communication with the team',
            'Unity Collab used for remote collaboration',
            'Zoom used for meetings',
            'Oculus Quest & Oculus Quest 2 used for development and QA',
            'Oculus link used for asymmetric play'
        ],
        bodyImgSrcA: require('@/assets/img/projects/Antithesis-1.png'),
        bodyImgSrcB: require('@/assets/img/projects/Antithesis-2.png'),
        featured: true
    },
    {
        title: 'Fillball',
        imgSrc: require('@/assets/img/projects/Fillball.png'),
        id: 'fillball',
        blurb: 'Self-driven 3D Game in UE4',
        bodyComp: 'c',
        summary: '<b>Fillball</b> is a small, self-driven game project developed in Unreal Engine 4. The player controls a ball that can change between 4 colors by collecting small color pickups, passing through colored hoops, or pressing colored buttons. Changing the ball\'s color changes which paths are solid and passable; the player must strategically manage their current color, particularly if they wish to collect every color pickup. Through this project, I am learning how to program game behaviour and systems using C++, and I am familiarizing myself with the many features of UE4. Right now, 3 levels are planned for this project. ',
        responsibilities: [
            'Built player controls and other game components using Unreal\'s Blueprint system.',
            'Designed & implemented color-switching system in C++.',
            'Streamlined development by utilizing C++ objects and scripts within other Blueprint components, reducing compile times and allowing for speedy debugging.',
            'Created simple and aesthetically pleasing graphics by utilizing Unreal\'s flexible material editor.'
        ],
        tech: [
            'Game built in Unreal Engine.',
            'Code written in C++ using Visual Studio.',
            'Some graphics assets made using GIMP.'
        ],
        bodyImgSrcA: require('@/assets/img/projects/Fillball-1.gif'),
        bodyImgSrcB: require('@/assets/img/projects/Fillball-2.gif')
    },
    {
        title: 'Narcoleptic Nummies',
        imgSrc: require('@/assets/img/projects/Narcoleptic_Nummies.png'),
        id: 'narcoleptic_nummies',
        blurb: 'GMTK Game Jam 2020',
        bodyComp: 'b',
        summary: [
             'Narcoleptic Nummies is a video game project made during Game Maker Tool Kit\'s Game Jam held online over the summer of 2020. The player jumps through many levels, and every ten or so seconds the level\'s layout and environment switch between being "awake" and "asleep". In addition to producing original music and sound effects, I designed and implemented the dynamic sound system that would switch between two parallel "waking" and "sleeping" versions of one original level soundtrack. I accomplished this by using Unity\'s flexible object hierarchy system alongside principles of object-oriented design, in order to make code that could be easily utilized by my teammates. The entire core functionality of this music system was wrapped under a single method, allowing for seamless integration into the game\'s core code.',
             '<br><br>',
             'The game went on to rank #465 in art & presentation, out of over 5000 submissions!',
             '<br><br>',
             '<iframe scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1091114047&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true" width="100%" height="450" frameborder="no"></iframe>'
        ].join(' '),
        responsibilities: [
            'Produced 2 parallel versions of one original music track using SunVox, a "sleep" version and an "awake" version.',
            'Designed & implemented a dynamic music system that switches between the "sleep" and "awake" versions of the music in response to changes made during gameplay.',
            'Engineered a means of looping both tracks seamlessly and simultaneously, and also a means of fading smoothly between each version.',
            'Streamlined the integration of this music system by wrapping all of this functionality under 1 C# method call in Unity.'
        ],
        tech: [
            'Built objects in Unity and scripted them in C# using Visual Studio.',
            'Music produced with SunVox.',
            'Sounds edited with Audacity.'
        ],
        bodyImgSrcB: require('@/assets/img/projects/Narcoleptic_Nummies-1.gif'),
        bodyImgSrcA: null
    },
];

const state = {
    projects
};

const getters = {
    projects: state => {
        return state.projects;
    }
};

const store = {
    namespaced: true,
    state,
    getters
};

export default store;