const sceneEl = document.querySelector('a-scene');
const schwalbe = document.querySelector('a-entity');

// function createBox(side, x) {
//   var boxEl = document.createElement('a-box');
//   boxEl.setAttribute('color', 'blue');
//   boxEl.setAttribute('height', boxHeight);
//   boxEl.setAttribute('id', x+side);
//   boxEl.setAttribute('position', z+' '+y+' '+x);
//   buildings.appendChild(boxEl);
//   return;
// }


schwalbe.emit('los');
