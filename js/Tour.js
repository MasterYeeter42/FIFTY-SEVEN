AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "KNY v1.jpeg",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "kny v2.jpg",
      },

      {
        id: "eiffel-tower",
        title: "KNY 3",
        url: "demon-slayer-kimetsu-no-yaiba-vol-3-9781974700547_hr.jpg",
      },
      {
        id: "new-york-city",
        title: "KNY 4",
        url: "download.jpeg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);
      
      // Thumbnail Element
      const thumbNail = this.createThumbNail(item);
      borderEl.appendChild(thumbNail);
     
      // Title Text Element
      const titleEL = this.createTitleEL(position,item);
      borderEL.appendChild(titleEL);
      
      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function (position, id) {
    const entityEL = document.createElement("a-entity");
    entityEL.setattribute("id", id);
    entityEL.setattribute("visible", true);
    entityEL.setattribute("geomatry", {
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10,
    });
        entityEL.setattribute("position", position);
    entityEL.setattribute("material", {
      coloor: "#0077CC",
      opacity: 1,

    createBorder: function (item) {
    const entityEL = document.createElement("a-entity");
    entityEL.setattribute("visible", true);
    entityEL.setattribute("geomatry", {
      primitive: "circle",
      radius: 9,
    });
      entityEL.setattribute("material", { src: item.url});

      return entityEL;

    createBorder: function (position, item) {
    const entityEL = document.createElement("a-entity");
    entityEL.setattribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title,
    });
          const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    return entityEl;
  },
  
});
