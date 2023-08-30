#0 Setup Project

-`npx create-react-app <project-name>` -`cd <project-name>` -`npm start` or `npm run start` or `npx react-scripts start`
-auto open browser localhost:3000

#1 About Project
-Other code / Dependencies in node_modules
-can be deleted
-new setup with `npm install`
Dependencies is in package.json automatically
-seltcode is in src/

#2 Clean up a Project
3 : Clean up Project - remove unnecessary thing
clean up index.js
clean up App.js, App.css
clean up public/index.html
remove unnecessary file
restructure folder to app/ component/

3 : CSS setup

#### 3.1 : ติดตั้ง scss

ติดตั้ง sass เพื่อช่วยให้การเขียน CSS แบบ BEM สะดวกมากขึ้น
รันคำสั่ง npm install sass ลงใน terminal (อย่าลืม check path ว่าอยู่ที่ root project แล้ว : ตำแหน่งที่มี file package.json)
ตรวจสอบ dependencies ในไฟล์ package.json ว่ามี sass แล้ว

#### 3.2 : setup index.scss

ไฟล์ index.css : ให้แปลงนามสกุลไฟล์ เป็น index.scss
ไฟล์ index.js : เปลี่ยนการ import จาก index.css เป็น index.scss

#### 3.3 : CSS Global Reset

ไฟล์ index.scss : เขียน css rule เพื่อลบ default padding,margin ต่างๆ รวมถึงวิธีการวัดขนาดของ Box-model

#### 3.4 : Typography

ไฟล์ index.scss : ให้ทำการ import google font

ไฟล์ index.scss : ทำการเพิ่ม font หลักของ application (Nunito) ลงใน tag body

#### 3.5 : Color

knowledge : scss มีความสามารถในการสร้างตัวแปรไว้ใช้ได้
ไฟล์ index.scss : สร้างตัวแปรสำหรับเก็บสีหลักๆของ web-application

#4 : App Layout (or Page layout)
-วาง layout ของหน้าหลัก (ในที่นี้เรามี 1 หน้า)
-ในไฟล์ App.js วาง markup สำหรับทำ layout
-สร้างไฟล์ App.scss
-ไฟล์ App.scss : เขียน css สำหรับจัด layout
-ไฟล์ App.scss : ปรับนามสกุลไฟล์ เป็น App.module.scss
-หากมี error จากการหา variable ไม่เจอ : ให้ import global css เข้ามาใช้งาน
-ไฟล์ App.jsx : implement styles ลงไฟล์ App.jsx

#5 : UI-TASK
5.1 : AppBar or HeaderComponent
preview
![header](./images/header.png)
-ติดตั้ง library สำหรับทำ icon : npm install react-icons link to npm ,link to document
-สร้างไฟล์ Header.jsx สำหรับทำ Heade
-สร้างไฟล์ Header.module.scss สำหรับ css
-import styles มาใช้ใน JSX
-implement styles กับ className

###npm start (CRA) หรือ npm run dev
-เรียกใช้ script ของ library (react-script)
-เอาโค้ดใน src มา Bundle (WebPack)
-ไล่ตั้ง index.js และดูว่ามีการ import อะไรบ้าง
-ไล่หา code ที่ import ทั้งหมด
-code ตัวเองในไฟล์อื่นๆ (incorrect_path, missing file, ลืม export,inport)
-code ใน node_modules (import ผิดชื่อ, ยังไม่ได้ install package)
-asset ต่างๆ VDO,PIC,SVG
-solve import ได้หมด => bundle code เป็น 1 ไฟล์ JSใหญ่
-นำไฟล์ JS แนบ Index.html ให้
-นำ CSS ทั้งหมด แนบ index.html ให้ด้วย
-นำ Asset ต่างๆไปแทรกใน index.html
-ยัดทุกอย่างที่ต้องใช้ ลง dev-server (webpack dev-server)
-เปิด server ให้ (default port:3000)

#####List

<!-- {/* <ListItem text="Inbox" icon={<FaInbox />} active={true} />
<ListItem text="Today" icon={<FaCalendar />} active={false} />
<ListItem
text="Next 7 days"
icon={<FaCalendarAlt />}
active={false}
/> */} -->
<!--
<ListItem text="project-A" icon={<FaInbox />} active={true} />
<ListItem text="project-B" icon={<FaInbox />} active={false} /> -->
