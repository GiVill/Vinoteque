package unical.info.persistenza.dao;

import unical.info.model.Richieste;
import unical.info.model.Utente;

import java.util.List;

public interface RichiesteDao {
    public List<Richieste> findAll();

    public Richieste findByUtente(Long idUtente);

    public boolean save(Richieste richieste);

    public boolean delete(Richieste richieste);
    public boolean PromuoviASommelier(Richieste richieste);
}
