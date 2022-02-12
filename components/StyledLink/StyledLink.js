import Link from 'next/link';

const StyledLink = ({ name, to }) => {
  return (
    <Link 
    style={styles.link}
    href={to}
    >
      <span style={styles.linkText}>{name}</span>
    </Link>
  )
};

const styles = {
  link: {
    textDecoration: 'none'
  },
  linkText: {
    color: 'white'
  }
};

export default StyledLink;