function calculateMesh2() {
  // รับค่า + แปลงเป็นตัวเลข
  let R1 = parseFloat(document.getElementById("r1").value);
  let R2 = parseFloat(document.getElementById("r2").value);
  let R3 = parseFloat(document.getElementById("r3").value);
  let E1 = parseFloat(document.getElementById("E1").value);
  let E2 = parseFloat(document.getElementById("E2").value);

  // เช็คค่าว่าง
  if (isNaN(R1) || isNaN(R2) || isNaN(R3) || isNaN(E1) || isNaN(E2)) {
    alert("กรอกค่าให้ครบ");
    return;
  }

  // ค่าสมการ
  let a = R1 + R3;
  let b = -R3;
  let c = E1;

  let d = -R3;
  let e = R2 + R3;
  let f = E2;

  // Determinant
  let det = a * e - b * d;

  // กระแสเมช
  let i1 = (c * e - b * f) / det;
  let i2 = (a * f - c * d) / det;

  // แสดงผล
  document.getElementById("current_1").value =
    "I1 = " + i1.toFixed(2) + " A";

  document.getElementById("current_2").value =
    "I2 = " + i2.toFixed(2) + " A";
}
