import { Button } from "@mui/material";
import { useState } from "react";
import { useDebounce } from "~/hooks";

const TIMEOUT = 2000;

interface IProps {
  onClick: () => Promise<void>;
}

export default function CopyButton({ onClick }: IProps) {
  const [copyRequest, setCopyRequest] = useState({
    isCopied: false,
    hasError: false,
  });

  const debounce = useDebounce(TIMEOUT);

  const handleCopy = async () => {
    setCopyRequest({ isCopied: true, hasError: false });

    try {
      await onClick();
    } catch {
      setCopyRequest({ isCopied: false, hasError: true });
    } finally {
      debounce(() => {
        setCopyRequest({ isCopied: false, hasError: false });
      });
    }
  };

  return (
    <Button
      onClick={handleCopy}
      disabled={copyRequest.isCopied}
      color={
        copyRequest.isCopied
          ? "success"
          : copyRequest.hasError
            ? "error"
            : undefined
      }
    >
      {copyRequest.isCopied ? (
        <span>Copied!</span>
      ) : (
        <>
          <span>{copyRequest.hasError ? "Error" : "Copy to clipboard"}</span>
        </>
      )}
    </Button>
  );
}
