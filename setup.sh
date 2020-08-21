if ! command -v node &> /dev/null
then
    echo "Node could not be found. Please install Node before you can setup Karmaloop AIML Bot Admin"
    exit
fi

if ! command -v npm &> /dev/null
then
    echo "NPM could not be found. Please install NPM and Node before you can setup Karmaloop AIML Bot Admin"
    exit
fi

if ! command -v ng &> /dev/null
then
    sudo npm i -g @angular/cli
fi

if ! command -v sails &> /dev/null
then
    sudo npm i -g sails
fi

cd Admin
npm i

cd ..
cd API
npm i

cd ..

echo "Done. Please check for errors."

