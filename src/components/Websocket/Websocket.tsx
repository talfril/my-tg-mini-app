import { useState, FC } from "react";
import styles from "./Websocket.module.css";
import { Button } from "@/components/Button/Button";

export const Websocket: FC = () => {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const openConnection = () => {
    const socket = new WebSocket("wss://echo.websocket.org");
    setWs(socket);

    socket.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    socket.onclose = () => {
      setWs(null);
    };
  };

  const closeConnection = () => {
    if (ws) {
      ws.close();
      setWs(null);
    }
  };

  const sendMessage = () => {
    if (ws && input) {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(input);
        setInput("");
      }
    }
  };
  return (
    <>
      <div className={styles.conversationMenu}>
        <div className={styles.buttonsMenu}>
          <Button
            onClick={openConnection}
            buttonText='Начать разговор с эхо'
            disabled={!!ws && ws.readyState === WebSocket.OPEN}
            className={styles.buttonsMenuItem}
          />
          <Button
            onClick={closeConnection}
            buttonText='Закончить разговор'
            disabled={!ws || ws.readyState !== WebSocket.OPEN}
            className={styles.buttonsMenuItem}
          />
        </div>
        <div className={styles.inputSection}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Что вы хотели бы сказать?'
            className={styles.input}
          />
          <Button
            onClick={sendMessage}
            buttonText='Отправить'
            disabled={!ws || ws.readyState !== WebSocket.OPEN}
            className={styles.sendButton}
          />
        </div>
      </div>
      <div>
        <h2 className={styles.subTitle}>Ответ эхо:</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Websocket;
