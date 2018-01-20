/**
 * Created by Shashank on 6/8/2017.
 */

window.onload = function () {
    var oMainContainerDOM = document.getElementById("mainContainer");

    var oHeaderDiv = document.createElement("div");
    oHeaderDiv.innerHTML = oTree.name;
    oHeaderDiv.className += "headerNode";
    oHeaderDiv.onclick = function (oEvent) {
        oEvent.stopPropagation();
        toggleChildrenVisibility(oTree.id);
    };
    oMainContainerDOM.appendChild(oHeaderDiv);
    renderTree(oTree.children, oMainContainerDOM, oTree.id);
};

function renderTree(aChildren, oParentDOM, sParentId) {
    if(aChildren.length){
        var oParentBodyDiv = document.createElement("div");
        oParentBodyDiv.setAttribute("id", sParentId);
        oParentBodyDiv.className += "bodyNode";
        oParentBodyDiv.classList.add("hide");

        for(var i=0; i<aChildren.length; i++){
            let oChildData = aChildren[i];

            var oChildHeaderDiv = document.createElement("div");
            oChildHeaderDiv.innerHTML = oChildData.name;
            oChildHeaderDiv.className += "headerNode";
            oChildHeaderDiv.onclick = function (oEvent) {
                oEvent.stopPropagation();
                toggleChildrenVisibility(oChildData.id);
            };
            oParentBodyDiv.appendChild(oChildHeaderDiv);

            renderTree(oChildData.children, oParentBodyDiv, oChildData.id);
        }

        oParentBodyDiv && oParentDOM.appendChild(oParentBodyDiv);
    }
};


function toggleChildrenVisibility(sParentNodeId) {
    var oChildrenBody = document.getElementById(sParentNodeId);
    if(oChildrenBody){
        var aClassList = oChildrenBody.classList;
        if(aClassList.contains("hide")){
            oChildrenBody.classList.remove("hide");
        }else {
            oChildrenBody.classList.add("hide");
        }
    }
};