package com.api.tarefas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.tarefas.domain.Convidado;

public interface ConvidadoRepository extends JpaRepository<Convidado, Integer> {
	
	

}
