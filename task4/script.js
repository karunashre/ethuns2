function showDate() {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();
    
    const formattedDate = `${day}/${month}/${year}`;
    
    document.getElementById('date').textContent = formattedDate;
}

function showTime() {
    const now = new Date();
    const formattedTime = now.toString();
    
    document.getElementById('time').textContent = formattedTime;
}
