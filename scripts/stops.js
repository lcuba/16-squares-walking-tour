stops.forEach((stop, index) => {

    stop.element = $(`
        <div class='panel panel-default'>
          <div class='panel-heading'>
            <h3 class='panel-title'>
              <a data-toggle='collapse' data-parent='#location-list' href='#collapse${index + 1}'>${stop.title}</a>
            </h3>
          </div>
          <div id='collapse${index + 1}' class='panel-collapse collapse'>
            <div class='panel-body'>
              <p>${stop.description}</p>
              <iframe width='420' height='315' src='${stop.videosrc}' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>
            </div>
          </div>
        </div>
      `);

      $('#location-list').append(stop.element);
});
