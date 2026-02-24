function calculateMesh3() {
    let R1 = parseFloat(document.getElementById("R1").value);
    let R2 = parseFloat(document.getElementById("R2").value);
    let R3 = parseFloat(document.getElementById("R3").value);
    let R4 = parseFloat(document.getElementById("R4").value);
    let R5 = parseFloat(document.getElementById("R5").value);

    let E1 = parseFloat(document.getElementById("v1").value);
    let E2 = parseFloat(document.getElementById("v2").value);
    let E3 = parseFloat(document.getElementById("v3").value);
    let E4 = parseFloat(document.getElementById("v4").value);

    if ([R1, R2, R3, R4, R5, E1, E2, E3, E4].some(isNaN)) {
        alert("กรอกค่าให้ครบทุกช่องครับ");
        return;
    }

    // สมการ 3x3 ตามวงจร
    let a = R1 + R2 + R5;
    let b = -R2;
    let c = -R5;
    let j = E1 - E2;

    let d = -R2;
    let e = R2 + R3 + R4;
    let f = -R4;
    let k = E2 - E3;

    let g = -R5;
    let h = -R4;
    let i = R4 + R5;
    let l = E4;

    let det = a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
    
    if (det === 0) {
        alert("ไม่สามารถคำนวณได้เนื่องจากค่า Determinant เป็น 0");
        return;
    }

    let det1 = j * (e * i - f * h) - b * (k * i - f * l) + c * (k * h - e * l);
    let det2 = a * (k * i - f * l) - j * (d * i - f * g) + c * (d * l - k * g);
    let det3 = a * (e * l - k * h) - b * (d * l - k * g) + j * (d * h - e * g);

    // 1. คำนวณค่ากระแสดิบ
    let raw_I1 = det1 / det;
    let raw_I2 = det2 / det;
    let raw_I3 = det3 / det;

    // 2. ปัดเศษทศนิยมให้เหลือ 2 ตำแหน่ง "ก่อน" นำไปคำนวณแรงดัน 
    let I1 = Math.round(raw_I1 * 100) / 100; 
    let I2 = Math.round(raw_I2 * 100) / 100; 
    let I3 = Math.round(raw_I3 * 100) / 100; 

    // 3. กำหนดกระแสที่ไหลผ่าน R 
    let IR1 = Math.abs(I1);                 
    let IR2 = Math.abs(I2);                 
    let IR3 = Math.abs(I1 - I2);            
    let IR4 = Math.abs(I2 - I3);            
    let IR5 = Math.abs(I1 - I3);            

    // 4. คำนวณแรงดันตกคร่อม (V = I * R)
    let VR1 = IR1 * R1; // 0.62 V
    let VR2 = IR2 * R2; // 0.92 V
    let VR3 = IR3 * R3; // 0.48 V
    let VR4 = IR4 * R4; // 3.87 V
    let VR5 = IR5 * R5; // 4.08 V

    // 5. แสดงผลกระแส
    document.getElementById("current_1").value = "I1 = " + I1.toFixed(2) + " A";
    document.getElementById("current_2").value = "I2 = " + I2.toFixed(2) + " A";
    document.getElementById("current_3").value = "I3 = " + I3.toFixed(2) + " A";

    // 6. แสดงผลแรงดัน
    if(document.getElementById("v_r1")) document.getElementById("v_r1").value = "V1 = " + VR1.toFixed(2) + " V";
    if(document.getElementById("v_r2")) document.getElementById("v_r2").value = "V2 = " + VR2.toFixed(2) + " V";
    if(document.getElementById("v_r3")) document.getElementById("v_r3").value = "V3 = " + VR3.toFixed(2) + " V";
    if(document.getElementById("v_r4")) document.getElementById("v_r4").value = "V4 = " + VR4.toFixed(2) + " V";
    if(document.getElementById("v_r5")) document.getElementById("v_r5").value = "V5 = " + VR5.toFixed(2) + " V";
}