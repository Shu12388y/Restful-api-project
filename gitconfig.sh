echo "Do you want pull from the main or remote repo"
echo "1. pull from remote"
echo "2. pull from main"
echo "3. not "
read options
if [ $options -eq 1 ]
then 
    git pull upstream main
elif [ $option -eq 2 ] 
then 
    git pull origin main
else 
    git add .
    echo "Enter your message"
    read message
    git commit -m "$message"
    echo "Enter your option"
    echo "1. git push"
    echo "2. git push upstream main"
    read option
    if [ $option -eq 1 ]
    then
        git push
    else
        git push upstream main    
    fi    

fi
