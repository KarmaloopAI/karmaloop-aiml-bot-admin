
trap "exit" INT TERM ERR
trap "kill 0" EXIT

cd API
echo "Starting API..."
sails lift &

cd ..
echo "Starting Admin..."
cd Admin
ng serve &

wait
