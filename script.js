const appointments =[];

function bookAppointment() {
    const booking = document.getElementById('booking');
    const bookingDate = booking.value;

    if (bookingDate === '') {
        alert('Please book an appointment');
        return;
    }

    const now = new Date();
    const select = new Date(bookingDate);

    if (select < now) {
    alert('You cannot book an appointment in the past');
    return;}

    const confirmbooking = document.getElementById('confirmationMessage');
    confirmbooking.innerHTML = `Appointment booked for ${bookingDate.toLocaleString()}`;

    appointments.push(select);
    displayAppointment();
}

function cancelAppointment(index) {
    appointments.splice(index, 1)
    displayAppointment();
};

function displayAppointment() {
    const appointmentsList = document.getElementById("appointmentslist")

    appointmentsList.innerHTML = '';appointments.forEach((app, index)=>{
    const li = document.createElement("li");
    li.innerHTML = `Appointment on ${app.toLocaleString()}`;

    const cancelButton = document.createElement('button');
    cancelButton.innerHTML = 'Cancel'
    cancelButton.onclick = () => cancelAppointment(index);

    li.appendChild(cancelButton);
    appointmentsList.appendChild(li);
})
}