// Purpose: To display the divisions and their champions and fighters on the divisions.html page
    const divisions = [
        {
            name: "Flyweight",
            champion: "Alexandre Pantoja",
            img: "images/champion_photos/PANTOJA_ALEXANDRE_BELT_05-04.png",
            fighters: ["Brandon Royval", "Brandon Moreno", "Amir Albazi", "Kai Kara-France", "Tatsuro Taira", "Alex Perez", "Matheus Nicolau", "Steve Erceg", "Manel Kape", "Tim Elliott", "Tagir Ulanbekov", "Bruno Silva", "Cody Durden", "Asu Almabayev", "Matt Schnell"]
        },
        {
            name: "Bantamweight",
            champion: "Merab Dvalishvili",
            img: "images/champion_photos/DVALISHVILI_MERAB_BELT.png",
            fighters: ["Sean O'Malley", "Umar Nurmagomedov", "Petr Yan", "Cory Sandhagen", "Deiveson Figueiredo", "Marlon Vera", "Henry Cejudo", "Song Yadong", "Mario Bautista", "Rob Font", "José Aldo", "Kyler Phillips", "Jonathan Martinez", "Dominick Cruz", "Montel Jackson"]
        },
        {
            name: "Featherweight",
            champion: "Ilia Topuria",
            img: "images/champion_photos/TOPURIA_ILIA_BELT-298.png",
            fighters: ["Alexander Volkanovski", "Max Holloway", "Diego Lopes", "Yair Rodriguez", "Movsar Evloev", "Brian Ortega", "Arnold Allen", "Josh Emmett", "Aljamain Sterling", "Calvin Kattar", "Giga Chikadze", "Lerone Murphy", "Bryce Mitchell", "Dan Ige", "Edson Barboza"]
        },
        {
            name: "Lightweight",
            champion: "Islam Makhachev",
            img: "images/champion_photos/MAKHACHEV_ISLAM_BELT_06-01.png",
            fighters: ["Arman Tsarukyan", "Charles Oliveira", "Justin Gaethje", "Dustin Poirier", "Dan Hooker", "Michael Chandler", "Beneil Dariush", "Max Holloway", "Mateusz Gamrot", "Rafael Fiziev", "Renato Moicano", "Benoît Saint Denis", "Rafael Dos Anjos", "Jalin Turner", "Paddy Pimblett"]
        },
        {
            name: "Welterweight",
            champion: "Belal Muhammad",
            img: "images/champion_photos/MUHAMMAD_BELAL_BELTMOCK.png",
            fighters: ["Leon Edwards", "Kamaru Usman", "Shavkat Rakhmonov", "Jack Della Maddalena", "Sean Brady", "Colby Covington", "Ian Machado Garry", "Gilbert Burns", "Joaquin Buckley", "Geoff Neal", "Stephen Thompson", "Michael Morales", "Michael Page", "Vicente Luque", "Neil Magny"]
        },
        {
            name: "Middleweight",
            champion: "Dricus Du Plessis",
            img: "images/champion_photos/DU_PLESSIS_DRICUS_BELT_08-17.png",
            fighters: [ "Sean Strickland", "Israel Adesanya", "Robert Whittaker", "Nassourdine Imavov", "Caio Borralho", "Marvin Vettori", "Jared Cannonier", "Brendan Allen", "Roman Dolidze", "Paulo Costa", "Jack Hermansson", "Khamzat Chimaev", "Anthony Hernandez", "Michel Pereira", "Chris Curtis"]
        },
        {
            name: "Light Heavyweight",
            champion: "Alex Pereira",
            img: "images/champion_photos/PEREIRA_ALEX_BELT_10-05.png",
            fighters: ["Jiří Procházka", "Magomed Ankalaev", "Jamahal Hill", "Jan Błachowicz", "Aleksandar Rakić", "Volkan Oezdemir", "Nikita Krylov", "Khalil Rountree Jr.", "Johnny Walker", "Carlos Ulberg", "Azamat Murzakanov", "Anthony Smith", "Dominick Reyes", "Bogdan Guskov", "Alonzo Menifield"]
        },
        {
            name: "Heavyweight",
            champion: "Jon Jones",
            img: "images/champion_photos/JONES_JON_BELT_03_04.png",
            fighters: ["Tom Aspinall", "Ciryl Gane", "Alexander Volkov", "Sergei Pavlovich", "Curtis Blaydes", "Jailton Almeida", "Serghei Spivac", "Stipe Miocic", "Jairzinho Rozenstruik", "Marcin Tybura", "Derrick Lewis", "Tai Tuivasa", "Alexandr Romanov", "Marcos Rogerio de Lima", "Rodrigo Nascimento"] 
        },
        {
            name: "Pound-for-Pound",
            champion: "Islam Makhachev",
            img: "images/champion_photos/MAKHACHEV_ISLAM_BELT_06-01.png",
            fighters: ["Islam Makhachev", "Alex Pereira", "Jon Jones", "Ilia Topuria", "Belal Muhammad", "Dricus Du Plessis", "Merab Dvalishvili", "Tom Aspinall", "Leon Edwards", "Alexander Volkanovski", "Max Holloway", "Alexandre Pantoja", "Sean O'Malley", "Sean Strickland", "Charles Oliveira"]
        },
        {
            name: "Women's Strawweight",
            champion: "Zhang Weili",
            img: "images/champion_photos/WEILI_ZHANG_BELT_04-13.png",
            fighters: ["Tatiana Suarez", "Yan Xiaonan", "Virna Jandiroba", "Jéssica Andrade", "Amanda Lemos", "Mackenzie Dern", "Amanda Ribas", "Iasmin Lucindo", "Marina Rodriguez", "Tabatha Ricci", "Loopy Godinez", "Angela Hill", "Luana Pinheiro", "Gillian Robertson", "Tecia Pennington"]
        },
        {
            name: "Women's Flyweight",
            champion: "Valentina Shevchenko",
            img: "images/champion_photos/SHEVCHENKO_VALENTINA_BELT_03-05.png",
            fighters: ["Alexa Grasso", "Manon Fiorot", "Erin Blanchfield", "Maycee Barber", "Rose Namajunas", "Natalia Silva", "Katlyn Cerminara", "Jéssica Andrade", "Viviane Araújo", "Amanda Ribas", "Karine Silva", "Tracy Cortez", "Ariane da Silva", "Jasmine Jasudavicius", "Casey O'Neill"]
        },
        {
            name: "Women's Bantamweight",
            champion: "Julianna Peña",
            img: "images/champion_photos/PENA_JULIANNA_BELT_07-30.png",
            fighters: ["Raquel Pennington", "Kayla Harrison", "Ketlen Vieira", "Macy Chiasson", "Norma Dumont", "Mayra Bueno Silva", "Irene Aldana", "Holly Holm", "Karol Rosa", "Yana Santos", "Miesha Tate", "Julia Avila", "Germaine de Randamie", "Ailin Perez", "Chelsea Chandler"]
        },
        {
            name: "Women's Pound-for-Pound",
            champion: "Valentina Shevchenko",
            img: "images/champion_photos/SHEVCHENKO_VALENTINA_BELT_03-05.png",
            fighters: ["Valentina Shevchenko", "Zhang Weili", "Alexa Grasso", "Julianna Pena", "Manon Fiorot", "Rose Namajunas", "Erin Blanchfield", "Raquel Pennington", "Kayla Harrison", "Tatiana Suarez", "Yan Xiaonan", "Virna Jandiroba", "Natalia Silva", "Jéssica Andrade", "Amanda Lemos"]
        }
        ];

    const template = document.getElementById('division-template').content;
    const body = document.body;

    divisions.forEach(division => {
        const clone = document.importNode(template, true);
        clone.querySelector('.division-img').src = division.img;
        clone.querySelector('.division-img').alt = `${division.name} Division`;
        clone.querySelector('.division-name').textContent = division.name;
        clone.querySelector('.champion-name').textContent = division.champion;

        const fightersList = clone.querySelector('.fighters-list');
        division.fighters.forEach((fighter, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${index + 1}</td><td>${fighter}</td>`;
            fightersList.appendChild(row);
        });

        body.appendChild(clone);
    });
