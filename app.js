const workoutForm = document.getElementById("workoutForm");
const workoutList = document.getElementById("workoutList");
const totalWorkouts = document.getElementById("totalWorkouts");
const totalDuration = document.getElementById("totalDuration");

let workouts = [];

workoutForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const workoutInput = document.getElementById("workout");
  const durationInput = document.getElementById("duration");

  const workout = {
    workout: workoutInput.value,
    duration: parseInt(durationInput.value),
  };

  workouts.push(workout);
  updateWorkouts();
});

function updateWorkouts() {
  workoutList.innerHTML = "";
  let totalDurationValue = 0;

  workouts.forEach((workout, index) => {
    const workoutDiv = document.createElement("div");
    workoutDiv.textContent = `Workout: ${workout.workout}, Duration: ${workout.duration} min`;
    workoutList.appendChild(workoutDiv);

    totalDurationValue += workout.duration;
  });

  totalWorkouts.textContent = `Total Workouts: ${workouts.length}`;
  totalDuration.textContent = `Total Duration (mins): ${totalDurationValue}`;
}
