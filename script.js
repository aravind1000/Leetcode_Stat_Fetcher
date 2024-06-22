async function fetchLeetCodeData() {
    try {
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/username`);
        const data = await response.json();

        if (data.error) {
            alert('User not found!');
            return;
        }

        document.getElementById('userName').innerText = data.username;
        document.getElementById('solved').innerText = data.totalSolved;
        document.getElementById('acceptanceRate').innerText = `${data.acceptanceRate}%`;
        document.getElementById('totalSubmissions').innerText = data.totalSubmissions;

        document.getElementById('userData').classList.remove('hidden');
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}
