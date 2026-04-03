
          <p class="watch-text">${item.synopsis}</p>

          <h4 style="margin-top: 28px;">Épisodes</h4>
          <div class="episode-list">
            ${item.episodes.map((ep, index) => `
              <div class="episode-item">
                <div class="episode-top">
                  <div>
                    <strong>${ep.title}</strong>
                    <div class="section-text">${ep.duration}</div>
                  </div>
                  <button class="btn btn-primary" onclick="playSeries(${item.id}, ${index})">Lire</button>
                </div>
                <p>${ep.description}</p>
              </div>
            `).join("")}
          </div>
        </div>

        <aside class="fiche-side">
          <div class="info-panel">
            <h4>Informations</h4>
            <div class="info-grid">
              <div class="info-box"><small>Année</small>${item.year}</div>
              <div class="info-box"><small>Catégorie</small>${item.genre} / ${item.subgenre}</div>
              <div class="info-box"><small>Saisons</small>${item.seasons}</div>
            </div>
          </div>

          <div class="cast-panel">
            <h4>Casting</h4>
            ${item.cast.map(name => `<div class="cast-name">${name}</div>`).join("")}
          </div>
        </aside>
      </div>
    </article>
  `).join("");
}

function playSeries(seriesId, episodeIndex = 0) {
  currentSeriesId = seriesId;
  currentEpisodeIndex = episodeIndex;
  renderWatchSection();
  window.location.hash = "watch";
}

searchToggle.addEventListener("click", () => {
  searchBox.classList.toggle("open");
  if (searchBox.classList.contains("open")) {
    searchInput.focus();
  }
});

searchInput.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  renderSeriesGrid();
});

window.playSeries = playSeries;

renderHero();
renderFilters();
renderSeriesGrid();
renderWatchSection();
renderEpisodesFeed();
renderFiches();
