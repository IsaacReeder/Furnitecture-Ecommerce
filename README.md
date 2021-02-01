# Furnitecture is an ecommerce application built with ReactJS, GraphQL, Strapi, Stripe, Material-UI, React-Transition-Group, React-Toastify, and Gestalt the Pinterest front end library.

# Back-end managed by Strapi CMS; leading open-source headless CMS. It’s 100% Javascript, fully customizable, and developer-first.

### Used by a wide range of organizations including: IBM, Walmart, and NASA                              
                
                      |\
              \|/     |
               |______|
               /       \
              / /_\ /_\ \
              |   : :   |
             /|   : :   |\               _   ....~~~~~~~
            : |  /___\  | :            _| |  ....~~~~~~~
            : |  [   ]  | ;           ( |U|  ....~~~~~~~
             \|  [   ]  |/             A|S|  ~~~~~~~~~~~
          +-------|-|-------+          H|A|  ~~~~~~~~~~~
         /|       |-|       |\         H|_|  |
        /\|       |-|       |/\        HIp   |
       /  +-------|-|-------+  \       wII   |
      /          /|-|\          \       II   |
     /            |-|            \      II   |
    `-'           |-|           `-'    cxI   |


---

### _installation:_

#### - cd front-end && npm install

#### - cd .. && npx create-strapi-app strapi --quickstart

**1. Choose language, and complete the administrator registration process.**
![Registration](https://user-images.githubusercontent.com/42079817/106491715-70407f80-64b7-11eb-8260-57c84f7c491d.png)

**2. Select Marketplace, and download the GraphQL plugin**
![GraphQL Plugin Download](https://user-images.githubusercontent.com/42079817/106492128-e04f0580-64b7-11eb-9ea2-1964d5fd95c3.png)

**3. Select Content-Types Builder, and then select Create New Collection Type.**
![Collection Creation](https://user-images.githubusercontent.com/42079817/106492435-3328bd00-64b8-11eb-9864-f502bba0d9c1.png)

**4. Create a collection named brand, containing a text field titled name, a rich text field titled description, and a multimedia field titled image.**
![Field Creation](https://user-images.githubusercontent.com/42079817/106492678-7c790c80-64b8-11eb-833f-0377962cfdd3.png)

**5. Create new brands titled painting, illustrations, sculpture, and furniture**
![All Brands ](https://user-images.githubusercontent.com/42079817/106493649-b7c80b00-64b9-11eb-86e1-e754fd209070.png)

**6. In the same fashion as the brands collection: create a collection named item, containing a text field titled name, a rich text field titled description, a multimedia field titled image, and a number titled price.**

**7. Create new items that coincide with the brands titled painting, illustrations, sculpture, and furniture.**
![Upload Items Data ](https://user-images.githubusercontent.com/42079817/106494785-248fd500-64bb-11eb-8983-ce81fd609b45.png)

**8. Select Brands, and then select Furniture. On the right side, you'll see "Items" above a drop-down box that contains the words "Add an item...". Add the appropriate items to the selected brand.**
![Selected Items for Brand](https://user-images.githubusercontent.com/42079817/106495458-fd85d300-64bb-11eb-9a2d-7b6c5be216b1.png)

**9. Repeat afore mentioned process in step 8 until all Items are assigned to thier proper Brand.**

#### - Control c

#### - strapi start

_in a different terminal window:_

#### - cd front-end && npm start
