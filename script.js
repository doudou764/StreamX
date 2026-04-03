const streamingData = {
  );

  episodesFeed.innerHTML = entries.map(item => `
    <article class="episode-card">
      <img src="${item.banner}" alt="${item.title}" />
      <div class="episode-card-content">
        <div>
          <div class="series-info">
            <span class="pill">${item.seriesTitle}</span>
            <span class="pill">${item.genre}</span>
            <span class="pill">${item.duration}</span>
            <span class="pill">${item.age}</span>
          </div>
          <h4>${item.title}</h4>
          <p>${item.description}</p>
        </div>
        <div class="episode-actions">
          <span class="pill">Disponible</span>
          <button class="btn btn-primary" onclick="playSeries(${item.seriesId}, 0)">Lire</button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderFiches() {
  fichesList.innerHTML = streamingData.series.map(item => {
    const favoriteText = isFavorite(item.id) ? "Retirer de Ma liste" : "+ Ajouter à Ma liste";
    const favoriteClass = isFavorite(item.id) ? "btn btn-primary" : "btn btn-ghost strong";

    return `
      <article class="fiche-card" id="fiche-${item.id}">
        <div class="fiche-banner">
          <img class="banner" src="${item.banner}" alt="${item.title} bannière" />
          <div class="fiche-banner-content">
            <img class="fiche-poster" src="${item.image}" alt="${item.title}" />
            <div class="fiche-right">
              <div class="fiche-tags">
                <span class="mini-tag red">${item.tag}</span>
                <span class="pill">${item.genre}</span>
                <span class="pill">${item.seasons}</span>
                <span class="pill">${item.age}</span>
                <span class="pill">${item.year}</span>
              </div>
              <h3>${item.title}</h3>
              <p>${item.synopsis}</p>
              <div class="fiche-actions">
                <button class="btn btn-light" onclick="playSeries(${item.id}, 0)">▶ Regarder</button>
                <button class="${favoriteClass}" onclick="toggleFavorite(${item.id})">${favoriteText}</button>
              </div>
            </div>
          </div>
        </div>

        <div class="fiche-body">
          <div class="fiche-main">
            <h4>Synopsis complet</h4>
            <p class="watch-text">${item.synopsis}</p>

            <h4 style="margin-top: 28px;">Épisodes</h4>
            <div class="episode-list">
              ${item.episodes.map((ep, index) => `
                <div class="episode-item">
                  <div class="episode-top">
                    <div>
                      
