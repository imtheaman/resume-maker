import styles from "./SwitchCheckbox.module.css";

const SwitchCheckbox: React.FC<{
  defaultChecked?: boolean;
  onChange: any;
  name?: string;
  fontSize?: string;
  fontWeight?: string | number;
}> = ({
  defaultChecked = false,
  fontSize,
  fontWeight,
  name,
  onChange,
  ...otherProps
}) => {
  return (
    <div>
      {name && <span style={{ fontSize, fontWeight }}>{name}</span>}
      <label className={styles.switch}>
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          onChange={onChange}
          {...otherProps}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default SwitchCheckbox;
