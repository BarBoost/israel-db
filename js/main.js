            document.onreadystatechange = function() {
                "complete" !== document.readyState ? (document.querySelector(".airtable-embed-content").style.visibility = "hidden",
                document.querySelector("#loader").style.visibility = "visible") : (document.querySelector("#loader").style.display = "none",
                document.querySelector(".airtable-embed-content").style.visibility = "visible")
            }
            ;
