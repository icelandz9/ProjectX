function calculateMesh3() {
    // รับค่า R
  let R1 = parseFloat(document.getElementById("R1").value);
  let R2 = parseFloat(document.getElementById("R2").value);
  let R3 = parseFloat(document.getElementById("R3").value);
  let R4 = parseFloat(document.getElementById("R4").value);
  let R5 = parseFloat(document.getElementById("R5").value);

  // รับค่าแรงดัน
  let E1 = parseFloat(document.getElementById("v1").value);
  let E2 = parseFloat(document.getElementById("v2").value);
  let E3 = parseFloat(document.getElementById("v3").value);
  let E4 = parseFloat(document.getElementById("v4").value);

  // ตรวจค่าว่าง
  if (
    isNaN(R1) || isNaN(R2) || isNaN(R3) ||
    isNaN(R4) || isNaN(R5) ||
    isNaN(E1) || isNaN(E2) ||
    isNaN(E3) || isNaN(E4)
  ) {
    alert("กรอกค่าให้ครบ");
    return;
  }

  // ===== ค่าสัมประสิทธิ์ =====

  let a = R1 + R2 + R5;
  let b = -R2;
  let c = 0;
  let d = E1 - E4;

  let e = -R2;
  let f = R2 + R3 + R4;
  let g = -R3;
  let h = E2;

  let i = 0;
  let j = -R3;
  let k = R3 + R4;
  let l = E3;

  // ===== Determinant หลัก =====

  let D =
      a*(f*k - g*j)
    - b*(e*k - g*i)
    + c*(e*j - f*i);

  // ===== D1 =====

  let D1 =
      d*(f*k - g*j)
    - b*(h*k - g*l)
    + c*(h*j - f*l);

  // ===== D2 =====

  let D2 =
      a*(h*k - g*l)
    - d*(e*k - g*i)
    + c*(e*l - h*i);

  // ===== D3 =====

  let D3 =
      a*(f*l - h*j)
    - b*(e*l - h*i)
    + d*(e*j - f*i);

  // ===== กระแส =====

  let I1 = D1 / D;
  let I2 = D2 / D;
  let I3 = D3 / D;

  // ===== แสดงผล =====

  document.getElementById("current_1").value =
    "I1 = " + I1.toFixed(2) + " A";

  document.getElementById("current_2").value =
    "I2 = " + I2.toFixed(2) + " A";

  document.getElementById("current_3").value =
    "I3 = " + I3.toFixed(2) + " A";
}