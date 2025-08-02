
document.addEventListener('DOMContentLoaded', () => {

    
    const form = document.getElementById('ripeness-form');
    const resultContainer = document.getElementById('result-container');
    const forecastResult = document.getElementById('forecast-result');

    /**
     * Generates a fake forecast for when a banana will be overripe.
     * @param {string} initialRipeness - The starting state ('green', 'yellow', 'spotted').
     * @returns {string} The formatted forecast string.
     */
    function getBananaRipenessForecast(initialRipeness) {
        
        const ripenessDurationDays = {
            green: [5, 8],
            yellow: [3, 5],
            spotted: [1, 2]
        };

        
        const [minDays, maxDays] = ripenessDurationDays[initialRipeness];
        if (!minDays) {
            return "Unknown initial ripeness. Please select a valid state.";
        }
        
     
        
        const now = new Date();
        
       
        const randomDays = Math.floor(Math.random() * (maxDays - minDays + 1)) + minDays;
        const randomHours = Math.floor(Math.random() * 24);
        const randomMinutes = Math.floor(Math.random() * 60);
        
      
        const millisecondsToAdd = (randomDays * 24 * 60 * 60 * 1000) +
                                  (randomHours * 60 * 60 * 1000) +
                                  (randomMinutes * 60 * 1000);

      
        const tooRipeDate = new Date(now.getTime() + millisecondsToAdd);
        
       
        const formattedDate = tooRipeDate.toLocaleString('en-US', {
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });

        return `This banana will be too ripe to trust by ${formattedDate}.`;
    }

   
    form.addEventListener('submit', (event) => {
       
        event.preventDefault();

       
        const selectedRipeness = form.querySelector('input[name="ripeness"]:checked').value;
        
       
        const forecast = getBananaRipenessForecast(selectedRipeness);
        
       
        forecastResult.textContent = forecast;
        
        
        resultContainer.classList.remove('hidden');
    });
});