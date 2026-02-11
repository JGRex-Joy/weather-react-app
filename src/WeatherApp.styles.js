export const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#83C4F0',
        fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        padding: '20px',
    },
    card: {
        background: '#557DE5',
        backdropFilter: 'blur(10px)',
        borderRadius: '30px',
        padding: '40px 35px',
        width: '100%',
        maxWidth: '420px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        animation: 'fadeIn 0.6s ease-out',
    },
    header: {
        textAlign: 'center',
        marginBottom: '30px',
    },
    title: {
        fontSize: '32px',
        fontWeight: '700',
        color: '#ffffff',
        margin: '0 0 8px 0',
        letterSpacing: '-0.5px',
    },
    date: {
        fontSize: '15px',
        color: 'rgba(255, 255, 255, 0.85)',
        margin: 0,
        fontWeight: '400',
    },
    searchContainer: {
        display: 'flex',
        gap: '10px',
        marginBottom: '35px',
    },
    searchInput: {
        flex: 1,
        padding: '14px 20px',
        fontSize: '15px',
        border: 'none',
        borderRadius: '15px',
        background: 'rgba(255, 255, 255, 0.95)',
        color: '#333',
        outline: 'none',
        fontFamily: 'inherit',
        transition: 'all 0.3s ease',
    },
    searchButton: {
        padding: '14px 20px',
        border: 'none',
        borderRadius: '15px',
        background: 'rgba(255, 255, 255, 0.25)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(5px)',
    },
    weatherContent: {
        textAlign: 'center',
        animation: 'slideUp 0.5s ease-out',
    },
    cityName: {
        fontSize: '28px',
        fontWeight: '600',
        color: '#ffffff',
        margin: '0 0 20px 0',
        letterSpacing: '-0.3px',
    },
    tempContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
        margin: '30px 0',
    },
    temperature: {
        fontSize: '72px',
        fontWeight: '700',
        color: '#ffffff',
        lineHeight: 1,
        letterSpacing: '-2px',
    },
    weatherIcon: {
        fontSize: '64px',
        lineHeight: 1,
    },
    detailsContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        marginTop: '35px',
        paddingTop: '25px',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    },
    detailItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    detailIcon: {
        opacity: 0.9,
    },
    detailText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '2px',
    },
    detailLabel: {
        fontSize: '13px',
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: '500',
    },
    detailValue: {
        fontSize: '18px',
        color: '#ffffff',
        fontWeight: '600',
    },
    loading: {
        textAlign: 'center',
        fontSize: '18px',
        color: '#ffffff',
        padding: '40px 0',
        fontWeight: '500',
    },
    error: {
        textAlign: 'center',
        fontSize: '16px',
        color: '#ffeb3b',
        padding: '20px',
        background: 'rgba(255, 0, 0, 0.15)',
        borderRadius: '15px',
        fontWeight: '500',
    },
};

// CSS для анимаций и дополнительных стилей
export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  input:focus {
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3) !important;
  }
  
  button:hover {
    background: rgba(255, 255, 255, 0.35) !important;
    transform: scale(1.05);
  }
  
  button:active {
    transform: scale(0.98);
  }
`;