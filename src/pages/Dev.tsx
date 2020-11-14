import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import PageWrapper from "../components/PageWrapper";
import { State } from "../redux/store/store";
import questionsFromGov from "../content/nr2_05_2020_questionsFromGov.json";
import { QuestionType } from "../redux/actions/questionsActions";

const limit = 2;
function Dev() {
  const x = useSelector((state: State) => state);

  const tresc_pytania = (questionsFromGov as any)["Treść pytania"];
  console.log(tresc_pytania[0]);

  const questions = tresc_pytania.map((item: any) => {
    return {
      id: `id${item["Numer pytania"]}`,
      text: item["Pytanie"],
      media: item["Media"].replace(".wmv", ".mp4"),
      correctAnswer: item["Poprawna odp"].toLowerCase(),
      a: item["Odpowiedź A"],
      b: item["Odpowiedź B"],
      c: item["Odpowiedź C"],
      cats: item["Kategorie"].toLowerCase().split(","),
      score: Number(item["Liczba punktów"]),
    };
  });

  console.log(questions[0], questions);

  const obj = {
    questionsLength: questions.length,
    questions: questions.slice(0, limit),
  };

  return (
    <PageWrapper>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12}>
          <Typography variant="h4" component="h1" gutterBottom>
            dev
          </Typography>
          <textarea value={JSON.stringify(obj)}></textarea>
        </Grid>
      </Grid>
    </PageWrapper>
  );
}

export default Dev;
