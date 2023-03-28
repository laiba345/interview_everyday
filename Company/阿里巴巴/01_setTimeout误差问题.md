setTimeout的误差问题
- 因为setTimeout()函数是将回调函数放入事件队列中，在当前的任务完成后才去执行，所以在任务队列中等待的时间可能会受到其他任务的影响，导致setTimeout()函数的执行时间发生偏差。
- 解决方案
    - 使用requestAnimationFrame()代替setTimeout()：requestAnimationFrame()是由浏览器调用的函数，它会在下一次重绘之前被执行。因此，requestAnimationFrame()可以实现更加精确的计时和渲染。
    - 使用**Date对象**获取当前时间：在执行setTimeout()时，我们可以记录下当前的时间戳，然后在回调函数中再次获取当前时间戳，从而计算出实际的延迟时间，避免误差的累积。
    