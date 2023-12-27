let reservations = [];

    function addReservation() 
    {
        const reservation = {
                trainName: document.getElementById('trainName').value,
                trainNumber: document.getElementById('trainNumber').value,
                trainClass: document.getElementById('sClass').value,
                origin: document.getElementById('origin').value,
                destination: document.getElementById('destination').value,
                ticketAmount: document.getElementById('Amount').value,
                date: document.getElementById('date').value,
        };

        reservations.push(reservation);

        document.getElementById('reservationForm').reset();

        displayReservation();
    }

    function displayReservation()
    {
        const tableBody = document.getElementById('reservationTable').getElementsByTagName('tbody')[0];

        tableBody.innerHTML = '';                  

        reservations.forEach((reservation, index) => {
            const row = tableBody.insertRow();

         
            const cell1 = row.insertCell(0);
            cell1.textContent =reservation.trainName;

            const cell2 = row.insertCell(1);
            cell2.textContent =reservation.trainNumber;

            const cell3 = row.insertCell(2);
            cell3.textContent =reservation.trainClass;

            const cell4 = row.insertCell(3);
            cell4.textContent =reservation.origin;

            const cell5 = row.insertCell(4);
            cell5.textContent =reservation.destination;

            const cell6 = row.insertCell(5);
            cell6.textContent =reservation.ticketAmount;

            const cell7 = row.insertCell(6);
            cell7.textContent =reservation.date;

            const cell8 = row.insertCell(reservation.length);
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteReservation(index));
            cell8.appendChild(deleteButton);
        });
    }

    function deleteReservation(index) 
    {
        reservations.splice(index, 1);
        displayReservation();
    }
