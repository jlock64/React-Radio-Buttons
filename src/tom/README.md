# Radio Button and Group Components

```js
;<RadioGroup>
  <Radio value={1} onChange={handleChange}>
    {MyRadioButon}
  </Radio>
  <Radio value={2} onChange={handleChange}>
    {MyRadioButton}
  </Radio>
</RadioGroup>

const MyRadioButton = ({ checked, handleClick }) =>
  checked ? (
    <Checked onClick={handleClick(true)} />
  ) : (
    <Unchecked onClick={handleClick(false)} />
  )

const Checked = ({ onClick }) => {
  const styles = {}
  return (
    <svg className="checked-radio" height="30" width="30" onClick={onClick}>
      <circle
        cx="15"
        cy="15"
        r="9"
        stroke="#81bc01"
        stroke-width="2"
        fill="#fff"
      />
      <circle cx="15" cy="15" r="5" strokeWidth="3" fill="#81bc01" />
    </svg>
  )
}

const Unchecked = ({ onClick }) => {
  return (
    <svg className="unchecked-radio" height="30" width="30" onClick={onClick}>
      <circle
        cx="15"
        cy="15"
        r="9"
        stroke="#757575"
        strokeWidth="2"
        fill="#fff"
      />
    </svg>
  )
}
```
