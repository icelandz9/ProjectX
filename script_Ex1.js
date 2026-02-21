function calculateMesh1() {

  // รับค่า input
  let branch = document.getElementById("branch").value;
  let node = document.getElementById("node").value;

  // แปลงเป็นตัวเลข
  branch = parseInt(branch);
  node = parseInt(node);

  // ตรวจสอบค่าว่าง
  if (isNaN(branch) || isNaN(node)) {
    alert("กรุณากรอกข้อมูลให้ครบ");
    return;
  }

  // สูตรคำนวณ
  let equation = branch - (node - 1);

  // แสดงผล
  document.getElementById("result").innerText = equation;
}
