Basic 

docker run -it (os/service) sh
docker run -it -p 80:80 --name ubuntuku ubuntu sh
docker ps 
docker ps a  
docker container stop id
docker container start id
docker rm id
docker images
docker run -p 80:80 imagename
docker run exec -it idcontainer bash

docker commit my_container my_custom_image
docker tag nama-gambar:tag-lama nama-gambar:tag-baru
docker tag my_custom_image:latest username/my_custom_image:latest
docker push username/my_custom_image:latest
docker run -d -p 80:80 --name my_new_container username/my_custom_image:latest

------------------
service xxx start
