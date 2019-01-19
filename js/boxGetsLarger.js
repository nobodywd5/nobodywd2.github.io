// var boxGetsLarger = anime({
//     targets: '#agent-button',
//     width: {
//       value: '+=300',
//       duration: 200,
//       easing: 'linear'
//     },
//     borderRadius: {
//       value: 83
//     },
//     duration: 200,
//     height: {
//       value: '+=20'
//     },
//     easing: 'linear',
//     autoplay: false
//   });
  
//   document.querySelector('#agent-button').onclick = function() {
//     boxGetsLarger.play();
//     boxGetsLarger.finished.then(() => {
//       boxGetsLarger.reverse();
//     })
//   }