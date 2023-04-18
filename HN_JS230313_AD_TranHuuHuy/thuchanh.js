let students = [
    {

        name: "TranHuy",
        Email: "huytran@gmail.com",
        phone: "0989665058",
        address: "Hà nội",
        Gender: "Nam",
    },
    {

        name: "Trananh",
        Email: "anhtran@gmail.com",
        phone: "0387282598",
        address: "Hà nam",
        Gender: "Nam",
    },
    {

        name: "NgocAnh",
        Email: "Ngocanh@gmail.com",
        phone: "01674398235",
        address: "Hà nam",
        Gender: "Nữ",
    },
];
function save() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let gender = '';
    if (document.getElementById("male").checked) {
        gender = document.getElementById("male").value;
        console.log(gender);
    } else if (document.getElementById("famale").checked) {
        gender = document.getElementById("famale").value;
        console.log(gender);
    }
    console.log(name, email, phone, address, gender);
    if (name == "") {
        document.getElementById("name-error").innerHTML = 'không được để trống';
    }
    else {
        document.getElementById("name-error").innerHTML = '';
    }
    if (email == "") {
        document.getElementById("email-error").innerHTML = 'phải nhập email';
    }
    else {
        document.getElementById("email-error").innerHTML = '';
    }
    if (phone == "") {
        document.getElementById("phone-error").innerHTML = 'phải nhập đúng số điện thoại Việt Nam';
    }
    else {
        document.getElementById("phone-error").innerHTML = '';
    }
    if (address == "") {
        document.getElementById("address-error").innerHTML = 'không được để trống';
    }
    else {
        document.getElementById("adress-error").innerHTML = '';
    }

    if (name && email && phone && address && gender) {
        let students = [];
        students.push({
            name: name,
            email: email,
            phone: phone,
            address: address,
            gender: gender
        });

        let tableContent = `<tr>
<td>1</td>
<td>Họ và Tên</td>
<td>Email</td>
<td>Điện thoại</td>
<td>Địa chỉ</td>
<td>Gender</td>
<td>Hành Động</td>
<td><a href="#">edit</a> | <a href="#">delete</a></td>
</tr>`;

        students.forEach((student, index) => {
            index = index + 1;
            tableContent += `<tr>
            <td>${index}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.address}</td>
            <td>${student.gender}</td>
            <td><a href="#">edit</a> | <a href="#">delete</a></td>
            </tr>`;
        })
        document.getElementById('gird-students').innerHTML = tableContent;
    }
}

// function deleteStudent() {
//     let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('localStorage.getItem('students')) : [];
//     students.splice(id, 1);
//     localStorage.setItem('students', JSON.stringify(students));
// }
