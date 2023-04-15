CSS水平垂直居中
- 1、绝对定位 + margin（子绝父相）
    - 首先，需要将父元素设置为相对定位（position: relative），然后将子元素设置为绝对定位（position: absolute）。接着，使用margin负值的方式来实现居中。
    - 代码实现
    ```
    html
        <div class="parent">
            <div class="child"></div>
        </div>
    css
        .parent {
            position: relative;
        }
        .child {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    ```
- 2、Flex布局
    - 使用Flex布局可以方便地实现水平垂直居中，**不需要知道子元素的宽度和高度**
    - 代码实现
    ```
    html
        <div class="parent">
            <div class="child"></div>
        </div>
    css
        .parent {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    ```
- 3、Grid布局
    - 代码实现
    ```
    html
        <div class="parent">
            <div class="child"></div>
        </div>
    css
        .parent {
            display: grid;
            place-items: center;
        }




    



