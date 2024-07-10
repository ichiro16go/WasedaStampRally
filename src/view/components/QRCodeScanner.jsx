import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // react-router-domを使用する場合
import {QrReader} from 'react-qr-reader';

export const QrScanner = () => {
  const [result, setResult] = useState(null);
  const history = useNavigate();

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      // URLに遷移する
      window.location.href = data;
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <h2>QRコードスキャナー</h2>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {result && <p>Scanned QR Code: {result}</p>}
    </div>
  );
};

