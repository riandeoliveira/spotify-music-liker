setTimeout(() => {
    let screenZoom = 5;

    const totalSongsElement = document.getElementsByClassName("RANLXG3qKB61Bh33I0r2 Hi9FqPX1LNRRPf31tfA8")[0];
    const totalSongs = Number(totalSongsElement.textContent.split(" ")[0]);

    const zoomOut = () => {
        const loadTimer = setInterval(() => {
            const button = document.getElementsByClassName("Fm7C3gdh5Lsc9qSXrQwO tGKwoPuvNBNK3TzCS5OH");
            const loadedSongs = button.length;

            console.clear();
            console.log("Carregando músicas...");

            document.body.style.zoom = screenZoom + "%";

            if (loadedSongs === totalSongs) {
                console.log(`Todas as ${loadedSongs} músicas foram carregadas.`);
                console.log("O zoom foi diminuído para permitir o carregamento total.");
                console.log("");

                let pos = totalSongs - 1;

                clearInterval(loadTimer);
                addSong(button, pos);
            }
        }, 100);
    }

    const addSong = (btn, i) => {
        let addedSongs = totalSongs - totalSongs;

        const addTimer = setInterval(() => {
            addedSongs++;

            btn[i].click();

            console.clear();
            console.log("Adicionando músicas...");
            console.log(`Músicas adicionadas: ${addedSongs}/${totalSongs}`);

            i--;

            if (addedSongs === totalSongs) {
                console.log("Todas as músicas foram adicionadas com sucesso!");
                clearInterval(addTimer);
            }
        }, 5000);
    }

    zoomOut();
}, 3000);