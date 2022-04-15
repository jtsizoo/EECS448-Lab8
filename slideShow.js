var image = document.getElementById('imageViewer');
var currentIndex =1;

var prevImage = function()
{
    if(currentIndex ==1)
    {
        image.src = 'https://i.pinimg.com/originals/a7/b7/5f/a7b75fc8c96290c5b9f0b7f0bbc80885.jpg';
        currentIndex = 5;
    }
    if(currentIndex ==2)
    {
        image.src = 'https://th.bing.com/th/id/R.acb1b8a6eee092820f94780b6b6cc9d7?rik=jm93Dg38n2m4vQ&riu=http%3a%2f%2ffullhdwall.com%2fwp-content%2fuploads%2f2016%2f03%2fCool-Landscape.jpg&ehk=mA%2bxJ15%2flbnOffwL5ZUBWVpozlYckBhs38KIVaU%2btjs%3d&risl=&pid=ImgRaw&r=0';
        currentIndex = 1;
    }
    if(currentIndex == 3)
    {
        image.src = 'https://wallpapercave.com/wp/wp6544180.jpg';
        currentIndex = 2;
    }
    if(currentIndex ==4)
    {
        image.src = 'https://images6.alphacoders.com/304/thumb-1920-304338.jpg';
        currentIndex = 3;
    }
    if(currentIndex ==5)
    {
        image.src = 'https://i.pinimg.com/736x/78/64/8f/78648f74332958713d4b8b203d639667--moraine-lake-nature-wallpaper.jpg';
        currentIndex = 4;
    }
}

function nextImage()
{
    if(currentIndex ==1)
    {
        image.src = 'https://wallpapercave.com/wp/wp6544180.jpg';
        currentIndex = 2;
    }
    else if(currentIndex ==2)
    {
        image.src = 'https://images6.alphacoders.com/304/thumb-1920-304338.jpg';
        currentIndex = 3;
    }
    else if(currentIndex ==3)
    {
        image.src = 'https://i.pinimg.com/736x/78/64/8f/78648f74332958713d4b8b203d639667--moraine-lake-nature-wallpaper.jpg';
        currentIndex = 4;
    }
    else if(currentIndex ==4)
    {
        image.src = 'https://i.pinimg.com/originals/a7/b7/5f/a7b75fc8c96290c5b9f0b7f0bbc80885.jpg';
        currentIndex = 5;
    }
    else if(currentIndex ==5)
    {
        image.src = 'https://th.bing.com/th/id/R.acb1b8a6eee092820f94780b6b6cc9d7?rik=jm93Dg38n2m4vQ&riu=http%3a%2f%2ffullhdwall.com%2fwp-content%2fuploads%2f2016%2f03%2fCool-Landscape.jpg&ehk=mA%2bxJ15%2flbnOffwL5ZUBWVpozlYckBhs38KIVaU%2btjs%3d&risl=&pid=ImgRaw&r=0';
        currentIndex = 1;
    }
}