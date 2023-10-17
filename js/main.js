            document.onreadystatechange = function() {
                "complete" !== document.readyState ? (document.querySelector(".airtable-embed-content").style.visibility = "hidden",
                document.querySelector(".loader-container").style.visibility = "visible") : (document.querySelector(".loader-container").style.display = "none",
                document.querySelector(".airtable-embed-content").style.visibility = "visible")
            }
            ;
