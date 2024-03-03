import React from 'react';

type Props = {
    setNumber: (num: number) => void;
    num:number
};

export const NumberForm = (props: Props) => {
    function search(formData: FormData) {
        const query = formData.get('query');
        if (query !== null && Number(query)) {
            props.setNumber(Number(query));
            console.log(`query: ${query}`);
        } else {
            alert('有効な図鑑番号を入れてください');
        }
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        search(formData);
    }
    const correc

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <label htmlFor="numberInput" style={{ margin: 0, display: 'flex', alignItems: 'center', fontSize: '16px', height: '32px' }}>No.</label>
      <input
        id="numberInput"
        placeholder="xxx"
        onChange={(e) => props.setNumber()}
        style={{ fontSize: '16px', height: '32px', padding: '0 10px' }}
        />
      <button type="submit" style={{ fontSize: '16px', height: '32px', padding: '0 20px' }}>検索</button> {/* paddingを追加してボタンの見た目を改善 */}
    </form>
    );
};
