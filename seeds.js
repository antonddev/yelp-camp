var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");


var data = [
    {
        name: "Lucky Town",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvoC0rbfocjogmn-evQol5VAnZQzpNLJwQjhBuT2D7-JXOfw3mcA",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut aliquam purus. Blandit turpis cursus in hac. Nibh tortor id aliquet lectus proin nibh nisl. Neque egestas congue quisque egestas diam in arcu cursus euismod. Convallis aenean et tortor at risus viverra adipiscing. Ac turpis egestas integer eget aliquet nibh praesent tristique. Vitae tortor condimentum lacinia quis vel. Aliquet lectus proin nibh nisl. Adipiscing commodo elit at imperdiet dui accumsan sit. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Viverra ipsum nunc aliquet bibendum enim. Id velit ut tortor pretium viverra. In ornare quam viverra orci sagittis eu volutpat odio."
    },
    {
        name: "Cave Beach",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNkelTRLy58WRixHlpotbm1y0ZGmsgxgpQckUiB-3U3ppe2Co6hQ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut aliquam purus. Blandit turpis cursus in hac. Nibh tortor id aliquet lectus proin nibh nisl. Neque egestas congue quisque egestas diam in arcu cursus euismod. Convallis aenean et tortor at risus viverra adipiscing. Ac turpis egestas integer eget aliquet nibh praesent tristique. Vitae tortor condimentum lacinia quis vel. Aliquet lectus proin nibh nisl. Adipiscing commodo elit at imperdiet dui accumsan sit. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Viverra ipsum nunc aliquet bibendum enim. Id velit ut tortor pretium viverra. In ornare quam viverra orci sagittis eu volutpat odio."
    },
    {
        name: "Morrison Ass",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGX7qHhzi9s5V66fbmHLdGsksZ67wp2-xCN2eKWvCx6roQD2i",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut aliquam purus. Blandit turpis cursus in hac. Nibh tortor id aliquet lectus proin nibh nisl. Neque egestas congue quisque egestas diam in arcu cursus euismod. Convallis aenean et tortor at risus viverra adipiscing. Ac turpis egestas integer eget aliquet nibh praesent tristique. Vitae tortor condimentum lacinia quis vel. Aliquet lectus proin nibh nisl. Adipiscing commodo elit at imperdiet dui accumsan sit. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Viverra ipsum nunc aliquet bibendum enim. Id velit ut tortor pretium viverra. In ornare quam viverra orci sagittis eu volutpat odio."
    },
    {
        name: "Handler Creek",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2GUrXavhP3cEiRoa_lRcKcM23HMVb_NO8wEVBD-EAUHTWw9gE",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut aliquam purus. Blandit turpis cursus in hac. Nibh tortor id aliquet lectus proin nibh nisl. Neque egestas congue quisque egestas diam in arcu cursus euismod. Convallis aenean et tortor at risus viverra adipiscing. Ac turpis egestas integer eget aliquet nibh praesent tristique. Vitae tortor condimentum lacinia quis vel. Aliquet lectus proin nibh nisl. Adipiscing commodo elit at imperdiet dui accumsan sit. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Viverra ipsum nunc aliquet bibendum enim. Id velit ut tortor pretium viverra. In ornare quam viverra orci sagittis eu volutpat odio."
    }
];

function seedDB(){
    // Remove all campgrounds from db
    Campground.remove({}, function(err){
        if(err){
            console.log(err)
        } else {
            console.log("removed campgrounds!");
            // Add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text:"This page is great but I wish more asses to be here right now a this exact moment",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment!");
                                }
                            }
                        )
                    }
                });
            });
        }
    });
}


module.exports = seedDB;

