import React, { useState } from "react";
import Textarea from "@mui/joy/Textarea";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";

const Home = () => {
  const [enteredText, setEnteredText] = useState("");
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoaderActive, setIsLoaderActive] = useState(false);

  const handleParaphrase = (e) => {
    e.preventDefault();
    setSuggestions([]);
    if (enteredText.trim() === "") {
      return false;
    } else {
      setIsLoaderActive(true);
      fetch("https://api.ai21.com/studio/v1/paraphrase", {
        headers: {
          Authorization: "Bearer FoLNsLoVOIhxv9W9NlPafdLddjW56obW",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: enteredText,
        }),
        method: "POST",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("An error occured");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setSuggestions(data.suggestions);
          setIsLoaderActive(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleCopyToClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 1000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <div className="bg-gray-800 font-[sans-serif] text-white p-6" id="">
        <div className="grid md:grid-cols-2 items-center gap-10 max-w-5xl max-md:max-w-md mx-auto">
          <div className="md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="max-md:text-center">
            <h3 className="md:text-3xl text-2xl md:leading-10">
              Transform Your Text with TextTune: The Ultimate Paraphrasing
              Solution
            </h3>
            <p className="mt-6 text-sm">
              Revolutionize Your Texts with TextTune: Advanced Paraphrasing to
              Refine and Amplify Your Message for Maximum Clarity and Engagement
            </p>
            <button
              type="button"
              className="px-6 py-2 mt-8 font-semibold rounded text-sm outline-none border-2 border-white"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
      <div className="container px-40 m-auto">
        <div className="mt-10 flex justify-center">
          <Textarea
            placeholder="Enter text to paraphrase..."
            minRows={11}
            sx={{
              "--Textarea-focusedInset": "var(--any, )",
              "--Textarea-focusedThickness": "0.25rem",
              "--Textarea-focusedHighlight": "rgba(13,110,253,.25)",
              "&::before": {
                transition: "box-shadow .15s ease-in-out",
              },
              "&:focus-within": {
                borderColor: "#86b7fe",
              },
              width: "100%", // Set width to 80% of the container
            }}
            value={enteredText}
            onChange={(e) => {
              setEnteredText(e.target.value);
            }}
          />
        </div>

        <div className="flex justify-center mt-5">
          <Button
            onClick={handleParaphrase}
            disabled={isLoaderActive ? true : false}
          >
            Paraphrase
          </Button>
        </div>

        {isLoaderActive ? (
          <>
            <div className="mt-8">
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
              </Box>
            </div>
          </>
        ) : (
          <>
            {suggestions.length > 0 ? (
              <>
                <div className="mt-10">
                  <h4 className="text-center font-semibold">Suggestions</h4>
                  {suggestions.slice(0, 5).map((suggestion, idx) => (
                    <>
                      <div className="mt-4 cursor-pointer" key={idx}>
                        <div
                          className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                          role="alert"
                          onClick={() => {
                            handleCopyToClipBoard(suggestion.text);
                          }}
                        >
                          {suggestion.text}
                        </div>
                      </div>
                    </>
                  ))}

                  <Snackbar
                    open={open}
                    autoHideDuration={1000}
                    message="Copied to clipboard!"
                  />
                </div>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Home;
