Promise有哪些状态？它们之间可以相互转换吗？
- 在JavaScript中，Promise有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。
- 当一个Promise被创建时，它的初始状态为pending。在异步操作完成后，Promise可以转换为fulfilled或rejected状态。
- Promise状态之间可以相互转换，但只能从pending转换为fulfilled或rejected，而一旦Promise进入fulfilled或rejected状态，它就无法再次转换到其他状态。