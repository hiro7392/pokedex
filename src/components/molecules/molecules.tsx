import { useState } from "react";
import { pokemonNameMap } from "../../data/pokemonNameMap";

type Props = {
  setNumber: (num: number) => void;
  num: number;
};

export const NumberForm = (props: Props) => {
  const [error, setError] = useState<string>("");

  const convertStringToNumber = (str: string) => {
    const trimmedStr = str.trim();
    const numericPattern = /^[0-9]+$/; // regex pattern to match numeric strings

    if (trimmedStr === "" || !numericPattern.test(trimmedStr)) {
      setError("数値を入力してください"); // set the error message if the input is not a numeric string
      return props.num;
    }

    const num = Number(trimmedStr);

    if (num <= 0 || num >= pokemonNameMap.length) {
      setError("存在しない図鑑No.です");
      return props.num;
    }
    return num;
  };

  return (
    <>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <label
          htmlFor="numberInput"
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "16px",
            height: "32px",
          }}
        >
          No.
        </label>
        <input
          id="numberInput"
          placeholder=""
          onChange={(e) => {
            setError(""); // clear the error message when input changes
            props.setNumber(convertStringToNumber(e.target.value));
          }}
          style={{
            fontSize: "16px",
            maxWidth: "200px",
            height: "32px",
            padding: "0 10px",
          }}
        />
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* render the error message if it exists */}
    </>
  );
};
