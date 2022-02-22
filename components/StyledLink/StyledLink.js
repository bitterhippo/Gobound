import Link from 'next/link';
import Colors from '../Colors';

const StyledLink = ({ name, to, color }) => {
  return (
    <div style={styles.linkWrapper}>
      <Link
        style={styles.link}
        href={to}
      >
        <span style={{ color: !color ? 'white' : color }}>{name}</span>
      </Link>
    </div>
  )
};

const styles = {
  linkWrapper: {
    cursor: 'pointer'
  },
  link: {
    textDecoration: 'none',
  }
};

export default StyledLink;