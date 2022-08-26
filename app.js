const btn = document.querySelector('.btn')
const result = document.querySelector('.result')
//ดึงข้อมูลน้ำหนักส่วนสูง
btn.addEventListener("click",(e)=>{ //มันจะดึงข้อมูลน้ำหนักส่วนสูงออกมาเมื่อเรามีการกดปุ่มคำนวณ
    e.preventDefault() //ไม่ต้อง reset ค่าที่อยู่ในแบบฟอร์ม ให้คงค่าที่กรอกเอาไว้
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value
    //ส่วนที่คำนึงถึงอย่างแรกคือต้องไม่ป้อนต่าว่าง สองคือห้ามป้อนตัวอักษรมา/ชุดข้อความ =>กรอง
    //ตรวจสอบความถูกต้องของข้อมูล
    if(weight === "" || isNaN(weight)){ //ถ้าน้ำหนักเป็นค่าว่าง และไม่ใช่ตัวเลข ใน result จะแสดงผลตามที่กำหนด
        return result.innerHTML = "กรุณาป้อนน้ำหนักของคุณ"
    }else if(height === "" || isNaN(height)){
        return result.innerHTML = "กรุณาป้อนส่วนสูงของคุณ"
    }else{
        //เริ่มต้นคำนวนค่าดัชนีมวลกาย สูตร BMI = Kg/M^2
        //แปลงหน่าย cm=>m 
        height =height/100
        let bmi = (weight/Math.pow(height,2)).toFixed(2) //Math.powคือ การคิดเป็นเลขยกกำลัง
        //เกณฑ์ค่าดัชนีมวลกาย
        //<18.5 = ผอมเกินไป
        //18.5-24.9 = น้ำหนักปกติ
        //25.0-29.9 = อ้วน
        //30 ขึ้นไป = อ้วนมาก
        if(bmi<18.5){
            showResult(bmi,"ผอมเกินไป","#ffd54f")
        }else if(bmi>=18.5 && bmi<=24.9){
            showResult(bmi,"น้ำหนักปกติ","#9ccc65")
        }else if(bmi>=25 && bmi<=29.9){
            showResult(bmi,"อ้วน","#b39ddb")
        }else{
            showResult(bmi,"อ้วนเกินไป","#f36c60")
        }
    }
})
//function แสดงสถานะ ใช้สีกำหนด ใน fuction นี้จะทำให้การเขียนโค้ด else if ด้านบนกระชับขึ้น เพราะมันมีคำที่ซ้ำกันหลายบรรทัด
function showResult(bmi,message,color){
    result.style.backgroundColor = color
    return result.innerHTML = `Result : ${bmi} (${message})`
}
