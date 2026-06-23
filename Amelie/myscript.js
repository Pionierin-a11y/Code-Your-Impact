AFRAME.registerComponent('ar-interaktion', {
        init: function () {
          // Das Element (unser Video), auf das geklickt wird
          let meinVideo = document.querySelector('#animation');
          let meinSound = document.querySelector('#soundeffekt');

          this.el.addEventListener('click', () => {
            // Video abspielen (falls es pausiert war)
            meinVideo.play();
            
            // Sound abspielen
            meinSound.currentTime = 0; // Sound von vorne starten
            meinSound.play();
          });
        }
      });
